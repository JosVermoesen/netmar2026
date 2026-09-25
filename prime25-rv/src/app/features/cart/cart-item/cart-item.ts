import { Component, inject, input, ChangeDetectionStrategy } from '@angular/core';
import { CartItem } from '../../../shared/models/cart';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../../core/services/cart.service';
import { Button } from 'primeng/button';

@Component({
    selector: 'app-cart-item',
    standalone: true,
    imports: [RouterLink, Button, CurrencyPipe],
    templateUrl: './cart-item.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './cart-item.scss'
})
export class CartItemComponent {
    item = input.required<CartItem>();
    cartService = inject(CartService);

    incrementQuantity() {
        this.cartService.addItemToCart(this.item());
    }

    decrementQuantity() {
        this.cartService.removeItemFromCart(this.item().productId);
    }

    removeItemFromCart() {
        this.cartService.removeItemFromCart(this.item().productId, this.item().quantity);
    }
}
