import { Component, inject } from '@angular/core';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatDivider } from '@angular/material/divider';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { SupplierService } from '../../../../core/services/supplier-service';

@Component({
  selector: 'app-suppliers-filters-dialog',
  imports: [
    ScrollingModule,
    MatDivider,
    MatSelectionList,
    MatListOption,
    MatButton,
    FormsModule
],
  templateUrl: './suppliers-filters-dialog.html',
  styleUrl: './suppliers-filters-dialog.scss',
})
export class SuppliersFiltersDialog {
  supplierService = inject(SupplierService);
  private dialogRef = inject(MatDialogRef<SuppliersFiltersDialog>);
  data = inject(MAT_DIALOG_DATA);
  selectedPostalCodes: string[] = this.data.selectedPostalCodes || [];

  sortedPostalCodes: string[] = this.supplierService.postalCodes.sort();
  // sortedPostalCodes: string[] = this.customerService.postalCodes.sort((a, b) => b.localeCompare(a))

  constructor() {
    console.log(this.supplierService.postalCodes.length, 'postalCodes length');
  }

  applyFilters() {
    this.dialogRef.close({
      selectedPostalCodes: this.selectedPostalCodes,
    });
  }
}
