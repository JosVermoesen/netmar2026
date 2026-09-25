import { Routes } from '@angular/router';
import { AppLayout } from '@/layout/components/app.layout';
import { Landing } from '@/pages/landing/landing';

import { NotFound } from '@/shared/components/not-found/not-found';
import { ServerError } from '@/shared/components/server-error/server-error';
import { Login } from '@/features/account/login/login';
import { Register } from '@/features/account/register/register';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            {
                path: '',
                data: { breadcrumb: 'Home' },
                loadChildren: () => import('./app/modules/home/home.module').then((m) => m.HomeModule)
            },
            {
                path: 'privacy',
                data: { breadcrumb: 'Privacy' },
                loadChildren: () => import('./app/modules/privacy/privacy.module').then((m) => m.PrivacyModule)
            },

            { path: 'account/login', component: Login },
            { path: 'account/register', component: Register },
            {
                path: 'insurances',
                data: { breadcrumb: 'Insurances' },
                loadChildren: () => import('./app/modules/our-insurances/insurances.module').then((m) => m.InsurancesModule)
            },
            {
                path: 'justforfun',
                data: { breadcrumb: 'JustForFun' },
                loadChildren: () => import('./app/modules/justforfun/justforfun.module').then((m) => m.JustForFunModule)
            },

            {
                path: 'accounting',
                data: { breadcrumb: 'Accounting' },
                loadChildren: () => import('./app/modules/accounting/accounting.module').then((m) => m.AccountingModule)
            },
            {
                path: 'hosting',
                data: { breadcrumb: 'Hosting' },
                loadChildren: () => import('./app/modules/hosting/hosting.module').then((m) => m.HostingModule)
            },

            {
                path: 'contactus',
                data: { breadcrumb: 'Contact' },
                loadChildren: () => import('./app/modules/contact/contact.module').then((m) => m.ContactModule)
            },

            {
                path: 'primetesting',
                data: { breadcrumb: 'Prime Testing' },
                loadChildren: () => import('./app/primetesting/primetesting.routes').then((m) => m.default)
            },

            {
                path: 'features',
                data: { breadcrumb: 'Features' },
                loadChildren: () => import('@/features/features.routes')
            },

            {
                path: 'dashboard-ecommerce',
                loadComponent: () => import('./app/pages/dashboards/ecommercedashboard').then((c) => c.EcommerceDashboard),
                data: { breadcrumb: 'E-Commerce Dashboard' }
            },
            {
                path: 'dashboard-banking',
                loadComponent: () => import('./app/pages/dashboards/bankingdashboard').then((c) => c.BankingDashboard),
                data: { breadcrumb: 'Banking Dashboard' }
            },
            {
                path: 'uikit',
                data: { breadcrumb: 'UI Kit' },
                loadChildren: () => import('@/pages/uikit/uikit.routes')
            },
            {
                path: 'documentation',
                data: { breadcrumb: 'Documentation' },
                loadComponent: () => import('./app/pages/documentation/documentation').then((c) => c.Documentation)
            },
            {
                path: 'pages',
                loadChildren: () => import('@/pages/pages.routes')
            },
            {
                path: 'apps',
                loadChildren: () => import('@/apps/apps.routes'),
                data: { breadcrumb: 'Apps' }
            },

            {
                path: 'blocks',
                data: { breadcrumb: 'Free Blocks' },
                loadChildren: () => import('./app/pages/blocks/blocks.routes')
            },
            {
                path: 'ecommerce',
                loadChildren: () => import('@/pages/ecommerce/ecommerce.routes'),
                data: { breadcrumb: 'E-Commerce' }
            },
            {
                path: 'profile',
                loadChildren: () => import('@/pages/usermanagement/usermanagement.routes')
            },
            { path: 'test-error', loadComponent: () => import('@/features/test-error/test-error').then((c) => c.TestError) },
            { path: 'not-found', component: NotFound },
            { path: 'server-error', component: ServerError }
        ]
    },
    { path: 'landing', component: Landing },
    {
        path: 'auth',
        loadChildren: () => import('@/pages/auth/auth.routes')
    }
    /* { path: '**', redirectTo: 'not-found', pathMatch: 'full' } */
];
