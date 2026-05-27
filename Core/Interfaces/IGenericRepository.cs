using Core.Entities;
using Core.Entities.Mar;

namespace Core.Interfaces;

public interface IGenericRepository<T> where T : BaseEntity
{
    // Generic repository interface for handling CRUD operations on entities of type T
    Task<T?> GetByIdAsync(int id);
    Task<IReadOnlyList<T>> ListAllAsync();
    Task<T?> GetEntityWithSpec(ISpecification<T> spec);
    Task<IReadOnlyList<T>> ListAsync(ISpecification<T> spec);
    Task<TResult?> GetEntityWithSpec<TResult>(ISpecification<T, TResult> spec);
    Task<IReadOnlyList<TResult>> ListAsync<TResult>(ISpecification<T, TResult> spec);
    void Add(T entity);
    void Update(T entity);
    void Remove(T entity);
    Task<bool> SaveAllAsync();
    bool Exists(int id);
    Task<int> CountAsync(ISpecification<T> spec);

    // Vsoft marIntegraal specific methods
    // Main tables
    Task<VsoftCustomer> GetVsoftCustomerWithDocs(int id);
    Task<VsoftSupplier> GetVsoftSupplierWithDocs(int id);
    Task<VsoftLedgerAccount> GetVsoftLedgerAccountWithLedgers(int id);
    Task<VsoftContract> GetVsoftContractWithDocs(int id);



}
