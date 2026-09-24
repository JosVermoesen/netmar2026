using System.Security.Claims;
using API.DTOs;
using API.Extensions;
using Core.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

using MailKit.Net.Smtp;
using MimeKit;
using API.Helpers;

namespace API.Controllers;

public class AccountController(SignInManager<AppUser> signInManager, IOptions<MailSettings> mailConfig) : BaseApiController
{
    private readonly IOptions<MailSettings> _mailConfig = mailConfig;
    private const string mailSubject = @"Nieuwe gebruikersregistratie";
    private const string bodyText = @"Hallo, U registreerde zich zo-even voor onze website rv.be
                                Na controle van deze registratie, ontvangt U als klant mailbevestiging en toegang tot uw functies.
                                Controle op: Identiteitskaart rijksregister nummer: ";
    private const string bodyHtml = @"<p>Hallo,<br>
                <p>U registreerde zich zo-even voor onze websites rv.be. 
                Na controle van deze registratie, ontvangt U als klant mailbevestiging en toegang tot uw functies.<br>
                <p>Controle op:<br> * Identiteitskaart rijksregister nummer: ";

    private const string mailSubject2Way = @"2Way checkup";
    private const string bodyText2Way = @"Hallo, Uw login verwacht binnen de 5 minuten een bevestigingscode bestaande uit 6 cijfers.";
    private const string bodyHtml2Way = @"<p>Hallo,<br>
                <p>Uw login verwacht binnen de 5 minuten een bevestigingscode bestaande uit 6 cijfers.<br><p>";

    [HttpPost("register")]
    public async Task<ActionResult> Register(RegisterDto registerDto)
    {
        var user = new AppUser
        {
            FirstName = registerDto.FirstName,
            LastName = registerDto.LastName,
            Email = registerDto.Email,
            UserName = registerDto.Email,
            BerNumber = registerDto.BerNumber,
            ClientNumber = registerDto.ClientNumber,
        };

        var result = await signInManager.UserManager.CreateAsync(user, registerDto.Password);
        if (!result.Succeeded)
        {
            foreach (var error in result.Errors)
            {
                ModelState.AddModelError(error.Code, error.Description);
            }
            return ValidationProblem();
        }
        return NoContent();
    }

    [Authorize]
    [HttpPost("logout")]
    public async Task<ActionResult> Logout()
    {
        await signInManager.SignOutAsync();
        return Ok();
    }

    // [Authorize]
    [HttpGet("user-info")]
    public async Task<ActionResult> GetUserInfo()
    {
        if (User.Identity?.IsAuthenticated == false) return NoContent();

        var user = await signInManager.UserManager.GetUserByEmailWithAddress(User);

        string stringToCheck = AnyString();
        SendMail2WayCheck(user, stringToCheck);

        return Ok(new
        {
            user.FirstName,
            user.LastName,
            user.Email,
            BerNumber = user.BerNumber + ";" + stringToCheck,
            user.ClientNumber,
            Address = user.Address?.ToDto() // Assuming Address is nullable
        });
    }

    [HttpGet("auth-status")]
    public ActionResult GetAuthState()
    {
        return Ok(new { IsAuthenticated = User.Identity?.IsAuthenticated ?? false });
    }

    [Authorize]
    [HttpPost("address")]
    public async Task<ActionResult<Address>> CreateOrUpdateAddress(AddressDto addressDto)
    {
        var user = await signInManager.UserManager.GetUserByEmailWithAddress(User);
        if (user.Address == null)
        {
            user.Address = addressDto.ToEntity();
        }
        else
        {
            user.Address.UpdateFromDto(addressDto);
        }

        var result = await signInManager.UserManager.UpdateAsync(user);
        if (!result.Succeeded) return BadRequest("Problem updating address");

        return Ok(user.Address.ToDto());
    }

    private static string AnyString()
    {
        Random rnd = new();
        int number = rnd.Next(100000, 999999); // creates a number between 1 and 12
        var anyString = Guid.NewGuid().ToString()[..6];
        return anyString;
    }

    private void SendMail2WayCheck(AppUser aUser, string aString)
    {
        var message = new MimeMessage();

        message.From.Add(new MailboxAddress(
            _mailConfig.Value.SendMailAddress,
            _mailConfig.Value.SendMailAddress));

        message.To.Add(new MailboxAddress(
            aUser.UserName,
            aUser.Email));

        message.Subject = mailSubject2Way;

        var builder = new BodyBuilder
        {
            // Set the plain-text version of the message text
            TextBody = bodyText2Way
            + " voor email: "
            + aUser.Email
            + " Bevestig uw login met code: "
            + aString
            + " Groeten, RV Admin",

            // Set the html version of the message text
            HtmlBody = string.Format(bodyHtml2Way
            + "<br> * voor Email: "
            + aUser.UserName
            + "<br> * Bevestig uw login met code: "
            + aString
            + "<br><p>Groeten, RV Admin<br>")
        };

        // HOWTO attach ??
        // builder.Attachments.Add(@"http://www.rv.be/docserver/!pdfDocumenten/mar/ODBC-MARDSN10-Instellen.pdf");

        // Now we just need to set the message body and we're done
        message.Body = builder.ToMessageBody();

        using var client = new SmtpClient();
        // For demo-purposes, accept all SSL certificates (in case the server supports STARTTLS)
        client.ServerCertificateValidationCallback = (s, c, h, e) => true;

        client.Connect(
            _mailConfig.Value.SendMailUrl, 587, false);

        // Note: only needed if the SMTP server requires authentication
        client.Authenticate(
            _mailConfig.Value.SendMailAddress,
            _mailConfig.Value.SendMailPassword);

        client.Send(message);
        client.Disconnect(true);
    }
}


