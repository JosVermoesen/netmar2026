import { Component, inject, OnInit, signal, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TabsModule } from 'primeng/tabs';

import { ShopService } from '../../../core/services/shop-service';
import { Product } from '../../../shared/models/product';
import { CartService } from '../../../core/services/cart.service';

@Component({
    selector: 'app-product-details',
    imports: [CurrencyPipe, FormsModule, CommonModule, InputNumberModule, ButtonModule, RippleModule, TabsModule],
    templateUrl: './product-details.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './product-details.scss'
})
export class ProductDetails implements OnInit {
    private shopService = inject(ShopService);
    private activatedRoute = inject(ActivatedRoute);
    private cartService = inject(CartService);
    private router = inject(Router);
    product = signal<Product | undefined>(undefined);
    quantityInCart = 0;
    quantity = 1;

    // Apollo UI demo variables
    color: string = 'bluegray';
    size: string = 'M';
    liked: boolean = false;
    images: string[] = [];
    selectedImageIndex: number = 0;
    quantityDemo: number = 1;

    ngOnInit(): void {
        this.loadProduct();
        // Apollo UI demo setup
        this.images = ['product-overview-3-1.png', 'product-overview-3-2.png', 'product-overview-3-3.png', 'product-overview-3-4.png'];
    }

    loadProduct() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        if (!id) return;

        this.shopService.getProduct(+id).subscribe({
            next: (product) => {
                (this.product.set(product), this.updateQuantityInCart());
            },
            error: (error) => console.error('Error loading product:', error)
        });
    }

    updateCart() {
        const product = this.product();

        if (!product) return;
        if (this.quantity > this.quantityInCart) {
            const itemsToAdd = this.quantity - this.quantityInCart;
            this.quantityInCart += itemsToAdd;
            this.cartService.addItemToCart(product, itemsToAdd);
        } else {
            const itemsToRemove = this.quantityInCart - this.quantity;
            this.quantityInCart -= itemsToRemove;
            this.cartService.removeItemFromCart(product.id, itemsToRemove);
        }
    }

    updateQuantityInCart() {
        this.quantityInCart = this.cartService.cart()?.items.find((x) => x.productId === this.product()?.id)?.quantity || 0;
        this.quantity = this.quantityInCart || 1;
    }

    getButtonText() {
        return this.quantityInCart > 0 ? 'Update cart' : 'Add to cart';
    }

    continueShopping() {
        this.router.navigate(['/features/shop']);
    }
}
