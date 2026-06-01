import { Component, inject, OnInit, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import {
  MatListOption,
  MatSelectionList,
  MatSelectionListChange,
} from '@angular/material/list';
import { MatCard } from '@angular/material/card';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { Customer } from '../../../shared/models/customer';
import { CustomerItem } from './customer-item/customer-item';
import { CustomerService } from '../../../core/services/customer-service';
import { CustomerParams } from '../../../shared/models/customerParams';
import { CustomersFiltersDialog } from './customers-filters-dialog/customers-filters-dialog';
import { Pagination } from '../../../shared/models/pagination';
import { EmptyState } from '../../../shared/components/empty-state/empty-state';

@Component({
  selector: 'app-customers-component',
  imports: [
    CustomerItem,
    MatButton,
    MatIcon,
    MatMenu,
    MatSelectionList,
    MatListOption,
    MatMenuTrigger,
    MatPaginator,
    FormsModule,
    EmptyState
  ],
  templateUrl: './customers.html',
  styleUrl: './customers.scss',
})
export class Customers implements OnInit {
  private customerService = inject(CustomerService);
  private dialogService = inject(MatDialog);
  customers = signal<Pagination<Customer> | undefined>(undefined);

  sortOptions = [
    { name: 'Alphabetical A to Z', value: 'asc' },
    { name: 'Alphabetical Z to A', value: 'desc' },
  ];
  customerParams = new CustomerParams();
  pageSizeOptions = [4, 8, 12, 16];

  ngOnInit(): void {
    this.initializecustomers();
  }

  initializecustomers(): void {
    this.customerService.getPostalCodes();
    // this.shopService.getTypes();
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers(this.customerParams).subscribe({
      next: (response) => this.customers.set(response),
      error: (error) => console.log('Error fetching customers:', error),
    });
  }

  onSearchChange() {
    this.customerParams.pageNumber = 1; // Reset to first page on search change
    this.getCustomers();
  }

  handlePageEvent(event: PageEvent) {
    this.customerParams.pageNumber = event.pageIndex + 1;
    this.customerService.getCustomers(this.customerParams).subscribe({
      next: (response) => this.customers.set(response),
      error: (error) => console.log('Error fetching customers:', error),
    });
    
    this.customerParams.pageSize = event.pageSize;
    this.getCustomers();
  }

  onSortChange(event: MatSelectionListChange) {
    const selectedOption = event.options[0];
    console.log('Selected option:', selectedOption);
    if (selectedOption) {
      this.customerParams.sort = selectedOption.value;
      this.customerParams.pageNumber = 1; // Reset to first page on sort change
      this.getCustomers();
    }
  }

  openFiltersDialog() {
    const dialogRef = this.dialogService.open(CustomersFiltersDialog, {
      minWidth: '500px',
      data: {
        selectedPostalCodes: this.customerParams.postalCodes,
      },
    });
    dialogRef.afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.customerParams.postalCodes = result.selectedPostalCodes;
          this.customerParams.pageNumber = 1; // Reset to first page on filter change
          this.getCustomers();
        }
      },
    });
  }
}
