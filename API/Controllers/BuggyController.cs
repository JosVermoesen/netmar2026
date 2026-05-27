using System.Security.Claims;
using API.DTOs;
using API.DTOs.VsoftContract;
using API.DTOs.VsoftCustomer;
using API.DTOs.VsoftLedgerAccount;
using API.DTOs.VsoftSupplier;
using Core.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class BuggyController : BaseApiController
{
    [HttpGet("unauthorized")]
    public IActionResult GetUnauthorized()
    {
        return Unauthorized();
    }

    [HttpGet("badrequest")]
    public IActionResult GetBadRequest()
    {
        return BadRequest("This was not a good request");
    }

    [HttpGet("notfound")]
    public IActionResult GetNotFound()
    {
        return NotFound();
    }

    [HttpGet("internalerror")]
    public IActionResult GetInternalError()
    {
        throw new Exception("This is a test exception");
    }

    [HttpPost("validationerror")]
    public IActionResult GetValidationError(CreateProductDto product)
    {
        return Ok();
    }

    [Authorize]
    [HttpGet("secret")]
    public IActionResult GetSecret()
    {
        var name = User.FindFirst(ClaimTypes.Name)?.Value;
        var id = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

        return Ok("Hello " + name + ", your user id is " + id );
    }


    [HttpPost("customervalidationerror")]
    public IActionResult GetCustomerValidationError(CustomerForNewDto customer)
    {
        return Ok();
    }

    [HttpPost("suppliervalidationerror")]
    public IActionResult GetSupplierValidationError(SupplierForNewDto supplier)
    {
        return Ok();
    }

    [HttpPost("ledgeraccountvalidationerror")]
    public IActionResult GetLedgerAccountValidationError(VsoftLedgerAccountForNewDto ledgeraccount)
    {
        return Ok();
    }

    [HttpPost("contractvalidationerror")]
    public IActionResult GetContractValidationError(ContractForNewDto contract)
    {
        return Ok();
    }
}
