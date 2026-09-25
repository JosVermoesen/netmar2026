import { Component, inject, OnInit, signal, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { Button } from 'primeng/button';
import { Select } from 'primeng/select';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FiltersDialog } from './filters-dialog/filters-dialog';

import { Product } from '../../shared/models/product';
import { ShopService } from '../../core/services/shop-service';
import { ProductItem } from './product-item/product-item';
import { ShopParams } from '../../shared/models/shopParams';
import { Pagination } from '../../shared/models/pagination';
import { EmptyState } from 'src/app/shared/components/empty-state/empty-state';

@Component({
    selector: 'app-shop',
    imports: [DynamicDialogModule, Select, PaginatorModule, Button, FormsModule, ProductItem, EmptyState],
    providers: [DialogService],
    changeDetection: ChangeDetectionStrategy.Eager,
    templateUrl: './shop.html'
})
export class Shop implements OnInit {
    private shopService = inject(ShopService);
    private dialogService = inject(DialogService);

    ref: DynamicDialogRef<any> | undefined | null;
    products = signal<Pagination<Product> | null>(null);

    sortOptions = [
        { name: 'Alphabetical', value: 'name' },
        { name: 'Price: Low to High', value: 'priceAsc' },
        { name: 'Price: High to Low', value: 'priceDesc' }
    ];
    sortKey = null;

    shopParams = new ShopParams();
    pageSizeOptions = [4, 8, 12, 16];

    ngOnInit(): void {
        this.initializeshop();
    }

    initializeshop(): void {
        this.shopService.getBrands();
        this.shopService.getTypes();
        this.getProducts();
    }

    getProducts() {
        this.shopService.getProducts(this.shopParams).subscribe({
            next: (response) => this.products.set(response),
            error: (error) => console.log('Error fetching products:', error)
        });
    }

    onPageChange(event: PaginatorState) {
        this.shopParams.pageNumber = (event.page ?? 0) + 1;
        this.shopParams.pageSize = event.rows ?? 4;
        this.getProducts();
    }

    onSortChange(event: any) {
        const selectedOption = event.value;
        if (selectedOption) {
            this.shopParams.sort = selectedOption;
            this.shopParams.pageNumber = 1; // Reset to first page on sort change
            this.getProducts();
        }
    }

    onSearchChange() {
        this.shopParams.pageNumber = 1; // Reset to first page on search change
        this.shopService.getProducts(this.shopParams).subscribe({
            next: (response) => this.products.set(response),
            error: (error) => console.log('Error fetching products:', error)
        });
        this.getProducts();
    }

    openFiltersDialog() {
        this.ref = this.dialogService.open(FiltersDialog, {
            header: 'Filter Products',
            width: '500px',
            data: {
                selectedBrands: this.shopParams.brands,
                selectedTypes: this.shopParams.types
            }
        });

        if (this.ref?.onClose) {
            this.ref.onClose.subscribe({
                next: (result) => {
                    if (result) {
                        this.shopParams.brands = result.selectedBrands;
                        this.shopParams.types = result.selectedTypes;
                        this.shopParams.pageNumber = 1; // Reset to first page on filter change
                        this.getProducts();
                    }
                }
            });
        }
    }
}
