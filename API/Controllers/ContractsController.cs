using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using Core.Entities.Mar;
using Core.Interfaces;
using Core.Specifications;
using API.DTOs.VsoftContract;


namespace API.Controllers
{
    public class ContractsController(IGenericRepository<VsoftContract> repo, IMapper mapper) : BaseApiController
    {
        private readonly IMapper _mapper = mapper;

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<VsoftContract>>> GetVsoftContracts(
            [FromQuery] ContractSpecParams specParams)
        {
            var spec = new ContractSpecification(specParams);
            return await CreatePagedResult(repo, spec, specParams.PageIndex, specParams.PageSize);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<VsoftContractForDetailedDto>> GetContract(int id)
        {
            var contract = await repo.GetVsoftContractWithDocs(id);
            if (contract == null) return NotFound();

            var contractDto = _mapper.Map<VsoftContractForDetailedDto>(contract);
            return contractDto;
        }

        [HttpPost]
        public async Task<ActionResult<VsoftContract>> CreateContract(VsoftContract contract)
        {
            repo.Add(contract);

            if (await repo.SaveAllAsync())
            {
                return CreatedAtAction("GetContract", new { id = contract.Id }, contract);
            }
            return BadRequest("Cannot create contract");
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> UpdateContract(int id, VsoftContract contract)
        {
            if (id != contract.Id || !ContractExists(id))
                return BadRequest("Cannot find contract to update");

            repo.Update(contract);

            if (await repo.SaveAllAsync())
            {
                return NoContent();
            }
            return BadRequest("Cannot update contract");
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> DeleteContract(int id)
        {
            var contract = await repo.GetByIdAsync(id);

            if (contract == null)
                return NotFound();

            repo.Remove(contract);

            if (await repo.SaveAllAsync())
            {
                return NoContent();
            }
            return BadRequest("Cannot delete contract");
        }

        private bool ContractExists(int id)
        {
            return repo.Exists(id);
        }
    }
}
