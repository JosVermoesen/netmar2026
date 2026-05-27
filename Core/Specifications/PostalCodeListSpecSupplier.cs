using Core.Entities;
using Core.Entities.Mar;

namespace Core.Specifications;

public class PostalCodeListSpecSupplier : BaseSpecification<VsoftSupplier, string>
{
    public PostalCodeListSpecSupplier()
    {
        AddSelect(x => x.A107 ?? "");
        ApplyDistinct();
    }

}
