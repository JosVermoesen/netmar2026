import { Routes } from '@angular/router';

export default [
    {
        path: 'customers',
        loadComponent: () => import('./customers/customers').then((c) => c.Customers),
        data: { breadcrumb: 'Customers' }
    },
    {
        path: 'customer/:id',
        loadComponent: () => import('./customers/customer-details/customer-details').then((c) => c.CustomerDetails),
        data: { breadcrumb: 'Customer Details' }
    },
    {
        path: 'suppliers',
        loadComponent: () => import('./suppliers/suppliers').then((s) => s.Suppliers),
        data: { breadcrumb: 'Suppliers' }
    },
    {
        path: 'supplier/:id',
        loadComponent: () => import('./suppliers/supplier-details/supplier-details').then((s) => s.SupplierDetails),
        data: { breadcrumb: 'Supplier Details' }
    },
    {
        path: 'ledgeraccounts',
        loadComponent: () => import('./ledgerAccounts/ledgerAccounts').then((l) => l.LedgerAccounts),
        data: { breadcrumb: 'Ledger Accounts' }
    },
    {
        path: 'ledgeraccount/:id',
        loadComponent: () => import('./ledgerAccounts/ledgerAccount-details/ledgerAccount-details').then((l) => l.LedgerAccountDetails),
        data: { breadcrumb: 'Ledger Account Details' }
    }
] as Routes;
