import { inject, Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class InitService {
    useShop = environment.useShop;
    private cartService = inject(CartService);

    init() {
        if (this.useShop) {
            const cartId = localStorage.getItem('cart2025_id');
            const cart$ = cartId ? this.cartService.getCart(cartId) : of(null);
            return cart$;
        }
        return of(null);
    }
}
