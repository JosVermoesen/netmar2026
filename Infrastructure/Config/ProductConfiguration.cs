using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Config;

public class ProductConfiguration : IEntityTypeConfiguration<Product>
{
    public void Configure(EntityTypeBuilder<Product> builder)
    {
        // Set default decimal to decimal(18,2)
        builder.Property(x => x.Price).HasColumnType("decimal(18,2)");
        // Set default max length to 100 instead of nvarchar(max)
        builder.Property(x => x.Name).IsRequired().HasMaxLength(100);
    }
}
