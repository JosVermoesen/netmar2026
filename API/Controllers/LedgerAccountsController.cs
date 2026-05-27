using API.DTOs.VsoftLedgerAccount;
using AutoMapper;
using Core.Entities.Mar;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class LedgerAccountsController(IGenericRepository<VsoftLedgerAccount> repo, IMapper mapper) : BaseApiController
{
    private readonly IMapper _mapper = mapper;

    [HttpGet]
    public async Task<ActionResult<IReadOnlyList<VsoftLedgerAccount>>> GetLedgerAccounts(
        [FromQuery] LedgerAccountSpecParams specParams)
    {
        var spec = new LedgerAccountSpecification(specParams);

        return await CreatePagedResult(repo, spec, specParams.PageIndex, specParams.PageSize);
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<VsoftLedgerAccountForDetailedDto>> GetLedgerAccount(int id)
    {
        var ledgerAccount = await repo.GetVsoftLedgerAccountWithLedgers(id);
        if (ledgerAccount == null) return NotFound();

        var ledgerAccountDto = _mapper.Map<VsoftLedgerAccountForDetailedDto>(ledgerAccount);
        return ledgerAccountDto;
    }

    [HttpPost]
    public async Task<ActionResult<VsoftLedgerAccount>> CreateLedgerAccount(VsoftLedgerAccount ledgerAccount)
    {
        repo.Add(ledgerAccount);

        if (await repo.SaveAllAsync())
        {
            return CreatedAtAction("GetLedgerAccount", new { id = ledgerAccount.Id }, ledgerAccount);
        }
        return BadRequest("Cannot create ledger account");
    }

    [HttpPut("{id:int}")]
    public async Task<ActionResult> UpdateLedgerAccount(int id, VsoftLedgerAccount ledgerAccount)
    {
        if (id != ledgerAccount.Id || !LedgerAccountExists(id))
            return BadRequest("Cannot find ledger account to update");

        repo.Update(ledgerAccount);

        if (await repo.SaveAllAsync())
        {
            return NoContent();
        }
        return BadRequest("Cannot update ledger account");
    }

    [HttpDelete("{id:int}")]
    public async Task<ActionResult> DeleteLedgerAccount(int id)
    {
        var ledgerAccount = await repo.GetByIdAsync(id);

        if (ledgerAccount == null)
            return NotFound();

        repo.Remove(ledgerAccount);

        if (await repo.SaveAllAsync())
        {
            return NoContent();
        }
        return BadRequest("Cannot delete ledger account");
    }

    private bool LedgerAccountExists(int id)
    {
        return repo.Exists(id);
    }

}
