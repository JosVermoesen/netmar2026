using Core.Entities;
using Core.Entities.Mar;
using Infrastructure.Config;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data;

public class CompanyContext(DbContextOptions options) : IdentityDbContext<AppUser>(options)
{
    public DbSet<Product> Products { get; set; }
    public DbSet<Address> Addresses { get; set; }
    public DbSet<DeliveryMethod> DeliveryMethods { get; set; }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.ApplyConfigurationsFromAssembly(typeof(ProductConfiguration).Assembly);
    }




    public DbSet<VsoftCustomer> VsoftCustomers { get; set; }
    public DbSet<VsoftContract> VsoftContracts { get; set; }
    public DbSet<VsoftTelebibContract> VsoftTelebibContracts { get; set; }
    public DbSet<VsoftCustomerInvoice> VsoftCustomerInvoices { get; set; }
    public DbSet<VsoftSupplier> VsoftSuppliers { get; set; }
    public DbSet<VsoftSupplierInvoice> VsoftSupplierInvoices { get; set; }
    public DbSet<VsoftLedgerAccount> VsoftLedgerAccounts { get; set; }
    public DbSet<VsoftLedger> VsoftLedgers { get; set; }


}


