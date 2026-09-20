using System.Collections.Concurrent;
using System.Text.Json;
using Core.Entities;
using Core.Interfaces;
using StackExchange.Redis;

namespace Infrastructure.Services;

public class CartService(IConnectionMultiplexer redis) : ICartService
{
    private static readonly ConcurrentDictionary<string, ShoppingCart> FallbackCarts = new();
    private readonly IDatabase _database = redis.GetDatabase();

    public async Task<bool> DeleteCartAsync(string key)
    {
        try
        {
            return await _database.KeyDeleteAsync(key);
        }
        catch
        {
            FallbackCarts.TryRemove(key, out _);
            return true;
        }
    }

    public async Task<ShoppingCart?> GetCartAsync(string key)
    {
        try
        {
            var data = await _database.StringGetAsync(key);
            return data.IsNullOrEmpty ? null : JsonSerializer.Deserialize<ShoppingCart>((byte[])data!);
        }
        catch
        {
            FallbackCarts.TryGetValue(key, out var cart);
            return cart;
        }
    }

    public async Task<ShoppingCart?> SetCartAsync(ShoppingCart cart)
    {
        try
        {
            var created = await _database.StringSetAsync(cart.Id,
                JsonSerializer.Serialize(cart), TimeSpan.FromDays(30));

            if (!created) return null;

            return await GetCartAsync(cart.Id);
        }
        catch
        {
            FallbackCarts[cart.Id] = cart;
            return cart;
        }
    }
}
