using API.DTOs.VsoftSupplier;
using AutoMapper;
using Core.Entities.Mar;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class SuppliersController(IGenericRepository<VsoftSupplier> repo, IMapper mapper) : BaseApiController
{
    private readonly IMapper _mapper = mapper;

    [HttpGet]
    public async Task<ActionResult<IReadOnlyList<VsoftSupplier>>> GetSuppliers(
        [FromQuery]SupplierSpecParams specParams)
    {
        var spec = new SupplierSpecification(specParams);

        return await CreatePagedResult(repo, spec, specParams.PageIndex, specParams.PageSize);
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<VsoftSupplierForDetailedDto>> GetSupplier(int id)
    {
        var supplier = await repo.GetVsoftSupplierWithDocs(id);

        if (supplier == null) return NotFound();

        var supplierDto = _mapper.Map<VsoftSupplierForDetailedDto>(supplier);

        return supplierDto;
    }

    [HttpPost]
    public async Task<ActionResult<VsoftSupplier>> CreateSupplier(VsoftSupplier supplier)
    {
        repo.Add(supplier);

        if (await repo.SaveAllAsync())
        {
            return CreatedAtAction("GetSupplier", new { id = supplier.Id }, supplier);
        }
        return BadRequest("Cannot create supplier");
    }

    [HttpPut("{id:int}")]
    public async Task<ActionResult> UpdateSupplier(int id, VsoftSupplier supplier)
    {
        if (id != supplier.Id || !SupplierExists(id))
            return BadRequest("Cannot find supplier to update");

        repo.Update(supplier);

        if (await repo.SaveAllAsync())
        {
            return NoContent();
        }
        return BadRequest("Cannot update supplier");
    }

    [HttpDelete("{id:int}")]
    public async Task<ActionResult> DeleteSupplier(int id)
    {
        var supplier = await repo.GetByIdAsync(id);

        if (supplier == null)
            return NotFound();

        repo.Remove(supplier);

        if (await repo.SaveAllAsync())
        {
            return NoContent();
        }
        return BadRequest("Cannot delete supplier");
    }

    [HttpGet("postalcodes")]
    public async Task<ActionResult<IReadOnlyList<string>>> GetPostalCodes()
    {
        var spec = new PostalCodeListSpecSupplier();

        return Ok(await repo.ListAsync(spec));
    }

    private bool SupplierExists(int id)
    {
        return repo.Exists(id);
    }
}

