using System.Security.Claims;
using API.DTOs;
using API.Extensions;
using Core.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class AccountController(SignInManager<AppUser> signInManager) : BaseApiController
{
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

        return Ok(new
        {
            user.FirstName,
            user.LastName,
            user.Email,
            user.BerNumber,
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

    private void SendMail2WayCheck(AppUser aUser, string aString)
    { }
}