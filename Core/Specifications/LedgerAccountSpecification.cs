using Core.Entities;
using Core.Entities.Mar;

namespace Core.Specifications;

public class LedgerAccountSpecification : BaseSpecification<VsoftLedgerAccount>
{
    public LedgerAccountSpecification(LedgerAccountSpecParams specParams) : base(x =>
        string.IsNullOrEmpty(specParams.Search) || x.V020.Contains(specParams.Search))
    {    
        ApplyPaging(specParams.PageSize * (specParams.PageIndex - 1), specParams.PageSize);

        switch (specParams.Sort)
        {
            case "asc":
                AddOrderBy(x => x.V020);
                break;
            case "desc":
                AddOrderByDescending(x => x.V020);
                break;
            default:
                AddOrderBy(x => x.V020);
                break;
        }
    }
}
