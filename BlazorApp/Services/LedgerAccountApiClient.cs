using System.Net.Http.Json;
using System.Web;

namespace BlazorApp.Services;

public sealed class LedgerAccountApiClient(IHttpClientFactory httpClientFactory)
{
    private readonly HttpClient _httpClient = httpClientFactory.CreateClient("LedgerAccountsApi");

    // Detail model for /api/ledgeraccounts/{id}
    public sealed class LedgerAccountResponse
    {
        public int Id { get; set; }

        // v019: account number
        public string? V019 { get; set; }

        // v020: description
        public string? V020 { get; set; }

        public decimal Dece022 { get; set; }
        public decimal Dece023 { get; set; }
        public decimal Dece024 { get; set; }
        public decimal Dece025 { get; set; }
        public decimal Dece026 { get; set; }
        public decimal Dece027 { get; set; }
        public decimal Dece028 { get; set; }
        public decimal Dece029 { get; set; }
        public decimal Dece030 { get; set; }
        public decimal Dece031 { get; set; }

        public string? V021 { get; set; }
        public string? V032 { get; set; }
        public string? V216 { get; set; }

        public List<LedgerEntry> VsoftLedgers { get; set; } = [];
    }

    public sealed class LedgerEntry
    {
        public int Id { get; set; }

        public string? V019 { get; set; }
        public string? V070 { get; set; }
        public string? V034 { get; set; }
        public string? V066 { get; set; }
        public string? V033 { get; set; }
        public string? V038 { get; set; }
        public string? V035 { get; set; }
        public string? V067 { get; set; }
        public string? V068 { get; set; }
        public string? V069 { get; set; }
        public string? V041 { get; set; }
        public string? V249 { get; set; }
        public string? V248 { get; set; }
        public string? V245 { get; set; }
        public string? V246 { get; set; }
        public decimal Dece068 { get; set; }
        public string? V102 { get; set; }
    }

    public sealed class LedgerAccountListItem
    {
        public int Id { get; set; }

        public string? V019 { get; set; }
        public string? V020 { get; set; }

        public decimal Dece022 { get; set; }
        public decimal Dece023 { get; set; }
        public decimal Dece024 { get; set; }
        public decimal Dece025 { get; set; }
        public decimal Dece026 { get; set; }
        public decimal Dece027 { get; set; }
        public decimal Dece028 { get; set; }
        public decimal Dece029 { get; set; }
        public decimal Dece030 { get; set; }
        public decimal Dece031 { get; set; }

        public string? V021 { get; set; }
        public string? V032 { get; set; }
        public string? V216 { get; set; }

        public List<LedgerEntry> VsoftLedgers { get; set; } = [];
    }

    public sealed class LedgerAccountListResult
    {
        public int PageIndex { get; set; }
        public int PageSize { get; set; }
        public int Count { get; set; }
        public List<LedgerAccountListItem> Data { get; set; } = [];
    }

    public Task<LedgerAccountResponse?> GetLedgerAccountAsync(
        int id,
        CancellationToken cancellationToken = default) =>
        _httpClient.GetFromJsonAsync<LedgerAccountResponse>(
            $"api/ledgeraccounts/{id}",
            cancellationToken);

    public async Task<LedgerAccountListResult> GetLedgerAccountsAsync(
        string? sort = null,
        string? search = null,
        int pageIndex = 1,
        int pageSize = 20,
        CancellationToken cancellationToken = default)
    {
        var query = HttpUtility.ParseQueryString(string.Empty);

        if (!string.IsNullOrWhiteSpace(sort))
        {
            query["sort"] = sort; // expected "asc" / "desc"
        }

        if (!string.IsNullOrWhiteSpace(search))
        {
            query["search"] = search;
        }

        query["pageIndex"] = pageIndex.ToString();
        query["pageSize"] = pageSize.ToString();

        var path = "api/ledgeraccounts";
        var queryString = query.ToString();
        if (!string.IsNullOrEmpty(queryString))
        {
            path += "?" + queryString;
        }

        var result = await _httpClient.GetFromJsonAsync<LedgerAccountListResult>(
            path,
            cancellationToken);

        return result ?? new LedgerAccountListResult();
    }
}