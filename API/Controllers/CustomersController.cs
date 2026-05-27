using API.DTOs.VsoftCustomer;
using AutoMapper;
using Core.Entities.Mar;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class CustomersController(IGenericRepository<VsoftCustomer> repo, IMapper mapper) : BaseApiController
{
    private readonly IMapper _mapper = mapper;

    [HttpGet]
    public async Task<ActionResult<IReadOnlyList<VsoftCustomer>>> GetCustomers(
        [FromQuery]CustomerSpecParams specParams)
    {
        var spec = new CustomerSpecification(specParams);

        return await CreatePagedResult(repo, spec, specParams.PageIndex, specParams.PageSize);
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<VsoftCustomerForDetailedDto>> GetCustomer(int id)
    {
        var customer = await repo.GetVsoftCustomerWithDocs(id);

        if (customer == null) return NotFound();

        var customerDto = _mapper.Map<VsoftCustomerForDetailedDto>(customer);

        return customerDto;
    }

    [HttpPost]
    public async Task<ActionResult<VsoftCustomer>> CreateCustomer(VsoftCustomer customer)
    {
        repo.Add(customer);

        if (await repo.SaveAllAsync())
        {
            return CreatedAtAction("GetCustomer", new { id = customer.Id }, customer);
        }
        return BadRequest("Cannot create customer");
    }

    [HttpPut("{id:int}")]
    public async Task<ActionResult> UpdateCustomer(int id, VsoftCustomer customer)
    {
        if (id != customer.Id || !CustomerExists(id))
            return BadRequest("Cannot find customer to update");

        repo.Update(customer);

        if (await repo.SaveAllAsync())
        {
            return NoContent();
        }
        return BadRequest("Cannot update customer");
    }

    [HttpDelete("{id:int}")]
    public async Task<ActionResult> DeleteCustomer(int id)
    {
        var customer = await repo.GetByIdAsync(id);

        if (customer == null)
            return NotFound();

        repo.Remove(customer);

        if (await repo.SaveAllAsync())
        {
            return NoContent();
        }
        return BadRequest("Cannot delete customer");
    }

    [HttpGet("postalcodes")]
    public async Task<ActionResult<IReadOnlyList<string>>> GetPostalCodes()
    {
        var spec = new PostalCodeListSpecCustomer();

        return Ok(await repo.ListAsync(spec));
    }

    private bool CustomerExists(int id)
    {
        return repo.Exists(id);
    }
}
