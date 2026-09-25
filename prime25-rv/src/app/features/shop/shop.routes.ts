import { Routes } from '@angular/router';

export default [
    {
        path: 'shop',
        loadComponent: () => import('./shop').then((c) => c.Shop),
        data: { breadcrumb: 'Shop' }
    },
    {
        path: 'product-details/:id',
        loadComponent: () => import('./product-details/product-details').then((c) => c.ProductDetails),
        data: { breadcrumb: 'Product Details' }
    }
] as Routes;
