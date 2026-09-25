import { authGuard } from '@/core/guards/auth.guard';
import { emptyCartGuard } from '@/core/guards/empty-cart.guard';
import { Routes } from '@angular/router';

export default [
    {
        path: 'cart',
        loadComponent: () => import('@/features/cart/cart').then((c) => c.Cart),
        data: { breadcrumb: 'Cart' }
    },
    {
        path: 'checkout',
        loadComponent: () => import('@/features/checkout/checkout').then((c) => c.Checkout),
        canActivate: [authGuard, emptyCartGuard],
        data: { breadcrumb: 'Checkout' }
    },
    {
        path: 'checkout/success',
        loadComponent: () => import('@/features/checkout/checkout-success/checkout-success').then((c) => c.CheckoutSuccess),
        canActivate: [authGuard],
        data: { breadcrumb: 'Checkout Success' }
    },
    {
        path: 'mar',
        loadChildren: () => import('@/features/mar/mar.routes').then((m) => m.default),
        data: { breadcrumb: 'Mar' }
    },
    {
        path: 'shop',
        loadComponent: () => import('@/features/shop/shop').then((c) => c.Shop),
        data: { breadcrumb: 'Shop' }
    },
    {
        path: 'shop/:id',
        loadComponent: () => import('@/features/shop/product-details/product-details').then((c) => c.ProductDetails),
        data: { breadcrumb: 'Product Details' }
    }
] as Routes;
