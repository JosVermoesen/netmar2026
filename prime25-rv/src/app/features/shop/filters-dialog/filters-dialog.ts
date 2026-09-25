import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Button } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

import { ShopService } from '../../../core/services/shop-service';

@Component({
    selector: 'app-filters-dialog',
    imports: [FormsModule, Button, ListboxModule],
    templateUrl: './filters-dialog.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './filters-dialog.scss'
})
export class FiltersDialog {
    shopService = inject(ShopService);
    private dialogRef = inject(DynamicDialogRef);
    public config = inject(DynamicDialogConfig);

    selectedBrands = this.config.data.selectedBrands;
    selectedTypes = this.config.data.selectedTypes;

    applyFilters() {
        this.dialogRef.close({
            selectedBrands: this.selectedBrands,
            selectedTypes: this.selectedTypes
        });
    }
}
