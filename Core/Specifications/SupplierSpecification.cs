using Core.Entities;
using Core.Entities.Mar;

namespace Core.Specifications;

public class SupplierSpecification : BaseSpecification<VsoftSupplier>
{
    public SupplierSpecification(SupplierSpecParams specParams) : base(x =>
        (string.IsNullOrEmpty(specParams.Search) || !(x.A100 == null || !x.A100.Contains(specParams.Search))) &&
        (specParams.PostalCodes.Count == 0 || (x.A107 != null && specParams.PostalCodes.Contains(x.A107))))
    {
        ApplyPaging(specParams.PageSize * (specParams.PageIndex - 1), specParams.PageSize);

        switch (specParams.Sort)
        {
            case "asc":
                AddOrderBy(x => x.A100 ?? string.Empty);
                break;
            case "desc":
                AddOrderByDescending(x => x.A100 ?? string.Empty);
                break;
            default:
                AddOrderBy(x => x.A100 ?? string.Empty);
                break;
        }
    }
}
