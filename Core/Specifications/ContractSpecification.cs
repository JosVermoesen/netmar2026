using Core.Entities;
using Core.Entities.Mar;

namespace Core.Specifications;

public class ContractSpecification : BaseSpecification<VsoftContract>
{
    public ContractSpecification(ContractSpecParams specParams) : base(x =>
        string.IsNullOrEmpty(specParams.Search) || x.V223.Contains(specParams.Search))
    {    
        ApplyPaging(specParams.PageSize * (specParams.PageIndex - 1), specParams.PageSize);

        switch (specParams.Sort)
        {
            case "asc":
                AddOrderBy(x => x.V223);
                break;
            case "desc":
                AddOrderByDescending(x => x.V223);
                break;
            default:
                AddOrderBy(x => x.V223);
                break;
        }
    }
}
