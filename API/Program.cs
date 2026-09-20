using API.MiddelWare;
using Core.Entities;
using Core.Helpers;
using Core.Interfaces;
using Infrastructure.Data;
using Infrastructure.Services;
using Microsoft.EntityFrameworkCore;
using StackExchange.Redis;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<CompanyContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});
builder.Services.AddAutoMapper(cfg => cfg.AddProfile<AutoMapperProfiles>());
builder.Services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
builder.Services.AddCors();
var redisConnectionString = builder.Configuration.GetConnectionString("Redis");
if (!string.IsNullOrWhiteSpace(redisConnectionString))
{
    try
    {
        var configuration = ConfigurationOptions.Parse(redisConnectionString, true);
        configuration.AbortOnConnectFail = true;
        configuration.ConnectTimeout = 2000;
        configuration.SyncTimeout = 2000;

        var multiplexer = ConnectionMultiplexer.Connect(configuration);
        _ = multiplexer.GetDatabase().Ping();

        builder.Services.AddSingleton<IConnectionMultiplexer>(multiplexer);
        builder.Services.AddSingleton<ICartService, CartService>();
        Console.WriteLine("Redis connected. Using Redis cart store.");
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Redis unavailable. Falling back to in-memory cart store. {ex.Message}");
        builder.Services.AddSingleton<ICartService, InMemoryCartService>();
    }
}
else
{
    Console.WriteLine("Redis connection string not configured. Using in-memory cart store.");
    builder.Services.AddSingleton<ICartService, InMemoryCartService>();
}

builder.Services.AddAuthorization();
builder.Services.AddIdentityApiEndpoints<AppUser>()
    .AddEntityFrameworkStores<CompanyContext>();
builder.Services.AddScoped<IPaymentService, PaymentService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseMiddleware<ExeptionMiddleware>();
app.UseCors(x =>
    x.AllowAnyHeader()
     .AllowAnyMethod()
     .AllowCredentials()
     .WithOrigins(
        "https://rv-services.be",
        "https://localhost:4200", "http://localhost:4200",        
        "https://localhost:5003", "http://localhost:5003" // Blazor WASM dev
     ));

app.MapControllers();
app.MapGroup("api").MapIdentityApi<AppUser>(); // we use api/register and api/login endpoints

try
{
    using var scope = app.Services.CreateScope();
    var services = scope.ServiceProvider;
    var context = services.GetRequiredService<CompanyContext>();
    await context.Database.MigrateAsync();
    await CompanyContextSeed.SeedAsync(context);
}
catch (Exception ex)
{
    Console.WriteLine(ex);
}
app.Run();
