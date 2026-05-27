import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Pagination } from '../../shared/models/pagination';
import { LedgerAccountParams } from '../../shared/models/ledgerAccountParams';
import { LedgerAccount } from '../../shared/models/ledgerAccount';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LedgerAccountService {
  baseUrl = environment.apiUrl;
  private http = inject(HttpClient);

  getLedgerAccounts(ledgerAccountParams: LedgerAccountParams) {
    let params = new HttpParams();

    if (ledgerAccountParams.sort) {
      params = params.append('sort', ledgerAccountParams.sort);
    }

    if (ledgerAccountParams.search) {
      params = params.append('search', ledgerAccountParams.search);
    }

    params = params.append('pageSize', ledgerAccountParams.pageSize);
    params = params.append('pageIndex', ledgerAccountParams.pageNumber);

    return this.http.get<Pagination<LedgerAccount>>(
      this.baseUrl + 'ledgeraccounts',
      {
        params,
      }
    );
  }

  getLedgerAccount(id: number) {
    return this.http.get<LedgerAccount>(this.baseUrl + 'ledgeraccounts/' + id);
  }
}
