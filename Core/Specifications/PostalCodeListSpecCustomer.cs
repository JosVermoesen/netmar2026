using Core.Entities;
using Core.Entities.Mar;

namespace Core.Specifications;

public class PostalCodeListSpecCustomer : BaseSpecification<VsoftCustomer, string>
{
    public PostalCodeListSpecCustomer()
    {
        AddSelect(x => x.A107 ?? "");
        ApplyDistinct();

    }

}
