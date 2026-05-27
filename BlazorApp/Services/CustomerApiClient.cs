using System.Net.Http.Json;
using System.Web;

namespace BlazorApp.Services;

public sealed class CustomerApiClient(IHttpClientFactory httpClientFactory)
{
    private readonly HttpClient _httpClient = httpClientFactory.CreateClient("CustomersApi");

    public sealed class CustomerResponse
    {
        public int Id { get; set; }

        public string? A100 { get; set; }
        public string? A104 { get; set; }
        public string? A105 { get; set; }
        public string? A107 { get; set; }
        public string? A108 { get; set; }
        public string? A161 { get; set; }
        public string? V224 { get; set; }

        public List<CustomerInvoice> VsoftCustomerInvoices { get; set; } = [];
    }

    public sealed class CustomerInvoice
    {
        public string? V033 { get; set; }
        public string? V035 { get; set; }
        public string? V037 { get; set; }
        public string? Vs03 { get; set; }
        public string? V038 { get; set; }
    }

    public sealed class CustomerListItem
    {
        public int Id { get; set; }
        public string? A100 { get; set; }
        public string? A107 { get; set; }
        public string? A108 { get; set; }
        public string? A161 { get; set; }
        public string? V224 { get; set; }
    }

    public sealed class CustomerListResult
    {
        public int PageIndex { get; set; }
        public int PageSize { get; set; }
        public int Count { get; set; }
        public List<CustomerListItem> Data { get; set; } = [];
    }

    public Task<CustomerResponse?> GetCustomerAsync(
        int id,
        CancellationToken cancellationToken = default) =>
        _httpClient.GetFromJsonAsync<CustomerResponse>(
            $"api/customers/{id}",
            cancellationToken);

    public async Task<CustomerListResult> GetCustomersAsync(
        string? sort = null,
        string? search = null,
        string? postalcodes = null,
        int pageIndex = 1,
        int pageSize = 20,
        CancellationToken cancellationToken = default)
    {
        var query = HttpUtility.ParseQueryString(string.Empty);

        if (!string.IsNullOrWhiteSpace(sort))
        {
            query["sort"] = sort;
        }

        if (!string.IsNullOrWhiteSpace(search))
        {
            query["search"] = search;
        }

        if (!string.IsNullOrWhiteSpace(postalcodes))
        {
            query["postalcodes"] = postalcodes;
        }

        query["pageIndex"] = pageIndex.ToString();
        query["pageSize"] = pageSize.ToString();

        var path = "api/customers";
        var queryString = query.ToString();
        if (!string.IsNullOrEmpty(queryString))
        {
            path += "?" + queryString;
        }

        var result = await _httpClient.GetFromJsonAsync<CustomerListResult>(
            path,
            cancellationToken);

        return result ?? new CustomerListResult();
    }
}