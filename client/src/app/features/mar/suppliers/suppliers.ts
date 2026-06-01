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
import { Pagination } from '../../../shared/models/pagination';
import { SupplierItem } from './supplier-item/supplier-item';
import { SupplierService } from '../../../core/services/supplier-service';
import { Supplier } from '../../../shared/models/supplier';
import { SupplierParams } from '../../../shared/models/supplierParams';
import { SuppliersFiltersDialog } from './supplier-filters-dialog/suppliers-filters-dialog';
import { EmptyState } from '../../../shared/components/empty-state/empty-state';

@Component({
  selector: 'app-suppliers-component',
  imports: [
    SupplierItem,
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
  templateUrl: './suppliers.html',
  styleUrl: './suppliers.scss',
})
export class Suppliers implements OnInit {
  private supplierService = inject(SupplierService);
  private dialogService = inject(MatDialog);
  suppliers = signal<Pagination<Supplier> | undefined>(undefined);

  sortOptions = [
    { name: 'Alphabetical A to Z', value: 'asc' },
    { name: 'Alphabetical Z to A', value: 'desc' },
  ];
  supplierParams = new SupplierParams();
  pageSizeOptions = [4, 8, 12, 16];

  ngOnInit(): void {
    this.initializeSuppliers();
  }

  initializeSuppliers(): void {
    this.supplierService.getPostalCodes();
    this.getSuppliers();
  }

  getSuppliers() {
    this.supplierService.getSuppliers(this.supplierParams).subscribe({
      next: (response) => this.suppliers.set(response),
      error: (error) => console.log('Error fetching suppliers:', error),
    });
  }

  onSearchChange() {
    this.supplierParams.pageNumber = 1; // Reset to first page on search change
    this.getSuppliers();
  }

  handlePageEvent(event: PageEvent) {
    this.supplierParams.pageNumber = event.pageIndex + 1; // PageEvent is zero-based
    this.supplierParams.pageSize = event.pageSize;
    this.getSuppliers();
  }

  onSortChange(event: MatSelectionListChange) {
    const selectedOption = event.options[0];
    console.log('Selected option:', selectedOption);
    if (selectedOption) {
      this.supplierParams.sort = selectedOption.value;
      this.supplierParams.pageNumber = 1; // Reset to first page on sort change
      this.getSuppliers();
    }
  }

  openFiltersDialog() {
    const dialogRef = this.dialogService.open(SuppliersFiltersDialog, {
      minWidth: '500px',
      data: {
        selectedPostalCodes: this.supplierParams.postalCodes,
        // selectedTypes: this.shopParams.types,
      },
    });
    dialogRef.afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.supplierParams.postalCodes = result.selectedPostalCodes;
          this.supplierParams.pageNumber = 1; // Reset to first page on filter change
          this.getSuppliers();
        }
      },
    });
  }
}
