using System.Collections.Concurrent;
using Core.Entities;
using Core.Interfaces;

namespace Infrastructure.Services;

public class InMemoryCartService : ICartService
{
    private static readonly ConcurrentDictionary<string, ShoppingCart> Carts = new();

    public Task<bool> DeleteCartAsync(string key)
    {
        return Task.FromResult(Carts.TryRemove(key, out _));
    }

    public Task<ShoppingCart?> GetCartAsync(string key)
    {
        Carts.TryGetValue(key, out var cart);
        return Task.FromResult(cart);
    }

    public Task<ShoppingCart?> SetCartAsync(ShoppingCart cart)
    {
        Carts[cart.Id] = cart;
        return Task.FromResult<ShoppingCart?>(cart);
    }
}
