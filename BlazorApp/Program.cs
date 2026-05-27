using BlazorApp.Components;
using BlazorApp.Services;

var builder = WebApplication.CreateBuilder(args);

var services = builder.Services;
var environment = builder.Environment;

// Add services to the container.
services.AddRazorComponents()
    .AddInteractiveServerComponents();

// API base address switches by environment
var apiBaseAddress = environment.IsDevelopment()
    ? new Uri("https://localhost:5001/")
    : new Uri("https://rv-services.be/");

// API HttpClients
services.AddHttpClient("CustomersApi", client =>
{
    client.BaseAddress = apiBaseAddress;
});

services.AddHttpClient("SuppliersApi", client =>
{
    client.BaseAddress = apiBaseAddress;
});

services.AddHttpClient("LedgerAccountsApi", client =>
{
    client.BaseAddress = apiBaseAddress;
});

// Typed clients
services.AddScoped<CustomerApiClient>();
services.AddScoped<SupplierApiClient>();
services.AddScoped<LedgerAccountApiClient>();

var app = builder.Build();

// Configure HTTP pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
    app.UseHsts();
}

app.UseStatusCodePagesWithReExecute("/not-found", createScopeForStatusCodePages: true);
app.UseHttpsRedirection();

app.UseAntiforgery();

app.MapStaticAssets();
app.MapRazorComponents<App>()
    .AddInteractiveServerRenderMode();

app.Run();
