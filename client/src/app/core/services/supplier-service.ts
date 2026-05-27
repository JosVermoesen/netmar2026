import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Pagination } from '../../shared/models/pagination';
import { SupplierParams } from '../../shared/models/supplierParams';
import { Supplier } from '../../shared/models/supplier';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupplierService {
  baseUrl = environment.apiUrl;
  private http = inject(HttpClient);
  // types: string[] = [];
  postalCodes: string[] = [];

  getSuppliers(supplierParams: SupplierParams) {
    let params = new HttpParams();

    if (supplierParams.postalCodes.length > 0) {
      params = params.append(
        'postalcodes',
        supplierParams.postalCodes.join(',')
      );
    }

    if (supplierParams.sort) {
      params = params.append('sort', supplierParams.sort);
    }

    if (supplierParams.search) {
      params = params.append('search', supplierParams.search);
    }

    params = params.append('pageSize', supplierParams.pageSize);
    params = params.append('pageIndex', supplierParams.pageNumber);

    return this.http.get<Pagination<Supplier>>(this.baseUrl + 'suppliers', {
      params,
    });
  }

  getSupplier(id: number) {
    return this.http.get<Supplier>(this.baseUrl + 'suppliers/' + id);
  }

  getPostalCodes() {
    if (this.postalCodes.length > 0) return;
    return this.http
      .get<string[]>(this.baseUrl + 'suppliers/postalcodes')
      .subscribe({
        next: (response) => (this.postalCodes = response),
      });
  }
}
