import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                data: { breadcrumb: 'Overview' },
                loadChildren: () => import('./insurances-overview/insurance-overview.module').then((m) => m.InsuranceOverviewModule)
            },
            {
                path: 'overview',
                data: { breadcrumb: 'Overview' },
                loadChildren: () => import('./insurances-overview/insurance-overview.module').then((m) => m.InsuranceOverviewModule)
            },
            {
                path: 'allinsurers',
                data: { breadcrumb: 'All Insurers' },
                loadChildren: () => import('./all-insurers/all-insurers.module').then((m) => m.AllInsurersModule)
            },
            {
                path: 'ins-fire',
                data: { breadcrumb: 'Fire' },
                loadChildren: () => import('./ins-fire/ins-fire.module').then((m) => m.InsFireModule)
            },
            {
                path: 'ins-car',
                data: { breadcrumb: 'Car' },
                loadChildren: () => import('./ins-car/ins-car.module').then((m) => m.InsCarModule)
            },
            {
                path: 'ins-investment',
                data: { breadcrumb: 'Investment' },
                loadChildren: () => import('./ins-investment/ins-investment.module').then((m) => m.InsInvestmentModule)
            },
            {
                path: 'ins-media',
                data: { breadcrumb: 'Media' },
                loadChildren: () => import('./ins-media/ins-media.module').then((m) => m.InsMediaModule)
            },
            {
                path: 'insurers',
                data: { breadcrumb: 'List' },
                loadChildren: () => import('./insurers/insurers.module').then((m) => m.InsurersModule)
            },

            { path: '**', redirectTo: '/not-found' }
        ])
    ],
    exports: [RouterModule]
})
export class InsurancesRoutingModule {}
