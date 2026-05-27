import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Shop } from './features/shop/shop';
import { Cart } from './features/cart/cart';
import { ProductDetails } from './features/shop/product-details/product-details';

import { TestError } from './features/test-error/test-error';
import { NotFound } from './shared/components/not-found/not-found';
import { ServerError } from './shared/components/server-error/server-error';

import { Customers } from './features/mar/customers/customers';
import { CustomerDetails } from './features/mar/customers/customer-details/customer-details';
import { Suppliers } from './features/mar/suppliers/suppliers';
import { SupplierDetails } from './features/mar/suppliers/supplier-details/supplier-details';
import { LedgerAccounts } from './features/mar/ledgerAccounts/ledgerAccounts';
import { LedgerAccountDetails } from './features/mar/ledgerAccounts/ledgerAccount-details/ledgerAccount-details';
import { Checkout } from './features/checkout/checkout';
import { Login } from './features/account/login/login';
import { Register } from './features/account/register/register';
import { authGuard } from './core/guards/auth-guard';
import { CheckoutSuccess } from './features/checkout/checkout-success/checkout-success';
import { emptyCartGuard } from './core/guards/empty-cart.guard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'shop', component: Shop },
  { path: 'shop/:id', component: ProductDetails },
  { path: 'cart', component: Cart },
  {
    path: 'checkout',
    component: Checkout,
    canActivate: [authGuard, emptyCartGuard],
  }, // Ensure user is authenticated before checkout
  {
    path: 'checkout/success',
    component: CheckoutSuccess,
    canActivate: [authGuard],
  },

  { path: 'account/login', component: Login },
  { path: 'account/register', component: Register },

  { path: 'test-error', component: TestError },
  { path: 'not-found', component: NotFound },
  { path: 'server-error', component: ServerError },

  { path: 'customers', component: Customers },
  { path: 'customer/:id', component: CustomerDetails },

  { path: 'suppliers', component: Suppliers },
  { path: 'supplier/:id', component: SupplierDetails },

  { path: 'ledgeraccounts', component: LedgerAccounts },
  { path: 'ledgeraccount/:id', component: LedgerAccountDetails },

  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }, // Redirect to home for any unknown routes
];
