using System.Net.Http.Json;
using System.Web;

namespace BlazorApp.Services;

public sealed class SupplierApiClient(IHttpClientFactory httpClientFactory)
{
    private readonly HttpClient _httpClient = httpClientFactory.CreateClient("SuppliersApi");

    // Detail model for /api/suppliers/{id}
    public sealed class SupplierResponse
    {
        public int Id { get; set; }

        public string? A100 { get; set; } // Name
        public string? A104 { get; set; } // Street
        public string? A105 { get; set; } // House number
        public string? A107 { get; set; } // Postal code
        public string? A108 { get; set; } // City
        public string? A161 { get; set; } // VAT/ID
        public string? V224 { get; set; } // Email
        public string? A10a { get; set; } // Phone (a10a)
        public string? Vs02 { get; set; } // Mobile/phone 2 (vs02)

        public List<SupplierInvoice> VsoftSupplierInvoices { get; set; } = [];
    }

    public sealed class SupplierInvoice
    {
        public string? V033 { get; set; } // Invoice number
        public string? V035 { get; set; } // Date yyyymmdd
        public string? V037 { get; set; } // Amount
        public string? Vs03 { get; set; } // Currency
        public string? V038 { get; set; } // Code
    }

    public sealed class SupplierListItem
    {
        public int Id { get; set; }
        public string? A100 { get; set; }
        public string? A107 { get; set; }
        public string? A108 { get; set; }
        public string? A161 { get; set; }
        public string? V224 { get; set; }
    }

    public sealed class SupplierListResult
    {
        public int PageIndex { get; set; }
        public int PageSize { get; set; }
        public int Count { get; set; }
        public List<SupplierListItem> Data { get; set; } = [];
    }

    public Task<SupplierResponse?> GetSupplierAsync(
        int id,
        CancellationToken cancellationToken = default) =>
        _httpClient.GetFromJsonAsync<SupplierResponse>(
            $"api/suppliers/{id}",
            cancellationToken);

    public async Task<SupplierListResult> GetSuppliersAsync(
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

        var path = "api/suppliers";
        var queryString = query.ToString();
        if (!string.IsNullOrEmpty(queryString))
        {
            path += "?" + queryString;
        }

        var result = await _httpClient.GetFromJsonAsync<SupplierListResult>(
            path,
            cancellationToken);

        return result ?? new SupplierListResult();
    }
}