import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Pagination } from '../../shared/models/pagination';
import { CustomerParams } from '../../shared/models/customerParams';
import { Customer } from '../../shared/models/customer';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  baseUrl = environment.apiUrl;
  private http = inject(HttpClient);  
  postalCodes: string[] = [];

  getCustomers(customerParams: CustomerParams) {
    let params = new HttpParams();

    if (customerParams.postalCodes.length > 0) {
      params = params.append(
        'postalcodes',
        customerParams.postalCodes.join(',')
      );
    }
   
    if (customerParams.sort) {
      params = params.append('sort', customerParams.sort);
    }

    if (customerParams.search) {
      params = params.append('search', customerParams.search);
    }

    params = params.append('pageSize', customerParams.pageSize);
    params = params.append('pageIndex', customerParams.pageNumber);

    return this.http.get<Pagination<Customer>>(this.baseUrl + 'customers', {
      params,
    });
  }

  getCustomer(id: number) {
    return this.http.get<Customer>(this.baseUrl + 'customers/' + id);
  }

  getPostalCodes() {
    if (this.postalCodes.length > 0) return;
    return this.http
      .get<string[]>(this.baseUrl + 'customers/postalcodes')
      .subscribe({
        next: (response) => (this.postalCodes = response),
      });
  }
}
