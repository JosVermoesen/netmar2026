import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatDivider } from '@angular/material/divider';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../../../core/services/customer-service';

@Component({
  selector: 'app-customers-filters-dialog',
  imports: [
    CommonModule,
    ScrollingModule,
    MatDivider,
    MatSelectionList,
    MatListOption,
    MatButton,
    FormsModule,
  ],
  templateUrl: './customers-filters-dialog.html',
  styleUrl: './customers-filters-dialog.scss',
})
export class CustomersFiltersDialog {
  customerService = inject(CustomerService);
  private dialogRef = inject(MatDialogRef<CustomersFiltersDialog>);
  data = inject(MAT_DIALOG_DATA);
  selectedPostalCodes: string[] = this.data.selectedPostalCodes || [];

  sortedPostalCodes: string[] = this.customerService.postalCodes.sort();
  // sortedPostalCodes: string[] = this.customerService.postalCodes.sort((a, b) => b.localeCompare(a))

  constructor() {
    console.log(this.customerService.postalCodes.length, 'postalCodes length');
  }

  applyFilters() {
    this.dialogRef.close({
      selectedPostalCodes: this.selectedPostalCodes,
    });
  }
}
