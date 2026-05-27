using System;
using Core.Entities;

namespace Core.Specifications;

public class TypesListSpecification: BaseSpecification<Product, string>
{
    public TypesListSpecification()
    {
        AddSelect(x => x.Type);
        ApplyDistinct();
    }

}
