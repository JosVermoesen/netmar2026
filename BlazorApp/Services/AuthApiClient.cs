using System.Net.Http.Json;

namespace BlazorApp.Services;

public sealed class AuthApiClient(IHttpClientFactory httpClientFactory, IWebHostEnvironment environment)
{
    private readonly HttpClient _httpClient = httpClientFactory.CreateClient("AuthApi");
    private readonly Uri _apiBaseAddress = environment.IsDevelopment()
        ? new Uri("https://localhost:5001/")
        : new Uri("https://rv-services.be/");

    public sealed class RegisterRequest
    {
        public string FirstName    { get; set; } = default!;
        public string LastName     { get; set; } = default!;
        public string Email        { get; set; } = default!;
        public string BerNumber    { get; set; } = default!;
        public string ClientNumber { get; set; } = default!;
        public string Password     { get; set; } = default!;
    }

    public sealed class LoginRequest
    {
        public string Email    { get; set; } = default!;
        public string Password { get; set; } = default!;
    }

    public sealed class UserInfoResponse
    {
        public string? FirstName    { get; set; }
        public string? LastName     { get; set; }
        public string? Email        { get; set; }
        public string? BerNumber    { get; set; }
        public string? ClientNumber { get; set; }
    }

    public sealed class AuthStatusResponse
    {
        public bool IsAuthenticated { get; set; }
    }

    public async Task<bool> LoginAsync(
        LoginRequest request,
        CancellationToken cancellationToken = default)
    {
        // Identity API endpoint: POST /api/login
        var response = await _httpClient.PostAsJsonAsync(
            "api/login",
            request,
            cancellationToken);

        return response.IsSuccessStatusCode;
    }

    public async Task<bool> RegisterAsync(
        RegisterRequest request,
        CancellationToken cancellationToken = default)
    {
        // Identity API endpoint: POST /api/register
        var response = await _httpClient.PostAsJsonAsync(
            "api/register",
            request,
            cancellationToken);

        return response.IsSuccessStatusCode;
    }

    public async Task LogoutAsync(CancellationToken cancellationToken = default)
    {
        // Identity API endpoint: POST /api/logout
        await _httpClient.PostAsync("api/logout", content: null, cancellationToken);
    }

    public async Task<AuthStatusResponse?> GetAuthStatusAsync(
        CancellationToken cancellationToken = default)
    {
        // your custom AccountController, if you keep it
        return await _httpClient.GetFromJsonAsync<AuthStatusResponse>(
            "account/auth-status",
            cancellationToken);
    }

    public async Task<UserInfoResponse?> GetUserInfoAsync(
        CancellationToken cancellationToken = default)
    {
        // your custom AccountController, if you keep it
        return await _httpClient.GetFromJsonAsync<UserInfoResponse>(
            "account/user-info",
            cancellationToken);
    }
}