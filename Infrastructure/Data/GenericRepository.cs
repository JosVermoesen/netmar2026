using Core.Entities;
using Core.Entities.Mar;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data;

public class GenericRepository<T>(CompanyContext context) : IGenericRepository<T> where T : BaseEntity
{
    // Generic repository for handling CRUD operations on entities of type T
    public async Task<T?> GetByIdAsync(int id)
    {
        return await context.Set<T>().FindAsync(id);
    }
    public async Task<IReadOnlyList<T>> ListAllAsync()
    {
        return await context.Set<T>().ToListAsync();
    }
    public void Add(T entity)
    {
        context.Set<T>().Add(entity);
    }
    public void Update(T entity)
    {
        context.Set<T>().Attach(entity);
        context.Entry(entity).State = EntityState.Modified;
    }
    public void Remove(T entity)
    {
        context.Set<T>().Remove(entity);
    }
    public async Task<bool> SaveAllAsync()
    {
        return await context.SaveChangesAsync() > 0;
    }
    public async Task<T?> GetEntityWithSpec(ISpecification<T> spec)
    {
        return await ApplySpecification(spec).FirstOrDefaultAsync();
    }
    public async Task<IReadOnlyList<T>> ListAsync(ISpecification<T> spec)
    {
        return await ApplySpecification(spec).ToListAsync();
    }
    public bool Exists(int id)
    {
        return context.Set<T>().Any(x => x.Id == id);
    }
    private IQueryable<T> ApplySpecification(ISpecification<T> spec)
    {
        return SpecificationEvaluator<T>.GetQuery(context.Set<T>().AsQueryable(), spec);
    }
    public async Task<TResult?> GetEntityWithSpec<TResult>(ISpecification<T, TResult> spec)
    {
        return await ApplySpecification(spec).FirstOrDefaultAsync();
    }
    public async Task<IReadOnlyList<TResult>> ListAsync<TResult>(ISpecification<T, TResult> spec)
    {
        return await ApplySpecification(spec).ToListAsync();
    }
    private IQueryable<TResult> ApplySpecification<TResult>(ISpecification<T, TResult> spec)
    {
        return SpecificationEvaluator<T>.GetQuery<T, TResult>(context.Set<T>().AsQueryable(), spec);
    }
    public async Task<int> CountAsync(ISpecification<T> spec)
    {
        var query = context.Set<T>().AsQueryable();

        query = spec.ApplyCriteria(query);

        return await query.CountAsync();
    }

    // Vsoft marIntegraal specific methods
    public async Task<VsoftCustomer> GetVsoftCustomerWithDocs(int id)
    {
        var vsoftcustomer = await context.VsoftCustomers
            .Include(c => c.VsoftContracts)
            .Include(i => i.VsoftCustomerInvoices)
            .FirstOrDefaultAsync(vc => vc.Id == id);

        return vsoftcustomer ?? throw new InvalidOperationException("VsoftCustomer not found.");
    }
    public async Task<VsoftSupplier> GetVsoftSupplierWithDocs(int id)
    {
        var vsoftsupplier = await context.VsoftSuppliers
            .Include(i => i.VsoftSupplierInvoices)
            .FirstOrDefaultAsync(vs => vs.Id == id);

        return vsoftsupplier ?? throw new InvalidOperationException("VsoftSupplier not found.");
    }
    public async Task<VsoftLedgerAccount> GetVsoftLedgerAccountWithLedgers(int id)
    {
        var vsoftaccount = await context.VsoftLedgerAccounts
            .Include(d => d.VsoftLedgers)
            .FirstOrDefaultAsync(va => va.Id == id);

        return vsoftaccount ?? throw new InvalidOperationException("VsoftLedgerAccount not found.");
    }

    public async Task<VsoftContract> GetVsoftContractWithDocs(int id)
    {
        var vsoftcontract = await context.VsoftContracts
           .Include(i => i.VsoftTelebibContracts)
           .FirstOrDefaultAsync(vc => vc.Id == id);

        return vsoftcontract ?? throw new InvalidOperationException("VsoftContract not found.");
    }
}


