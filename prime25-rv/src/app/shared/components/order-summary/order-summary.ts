import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';
import { CurrencyPipe, Location } from '@angular/common';
import { Button } from 'primeng/button';
import { InputNumber } from 'primeng/inputnumber';

// A shared component for displaying the order summary
// in the cart and checkout pages.

@Component({
    selector: 'app-order-summary',
    imports: [Button, InputNumber, RouterLink, CurrencyPipe],
    templateUrl: './order-summary.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './order-summary.scss'
})
export class OrderSummary {
    cartService = inject(CartService);
    location = inject(Location);
}
