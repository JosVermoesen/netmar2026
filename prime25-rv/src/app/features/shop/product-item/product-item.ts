import { Component, inject, Input, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../../shared/models/product';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';

@Component({
    selector: 'app-product-item',
    imports: [CurrencyPipe, RouterLink],
    templateUrl: './product-item.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './product-item.scss'
})
export class ProductItem {
    @Input() product?: Product;
    cartService = inject(CartService);
}
