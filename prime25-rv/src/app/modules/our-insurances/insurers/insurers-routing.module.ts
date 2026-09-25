import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsurersOverviewComponent } from './insurers-overview/insurers-overview.component';

const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Overview' },
    component: InsurersOverviewComponent,
  },
  {
    path: 'dkv-offers',
    data: { breadcrumb: 'Dkv' },
    loadChildren: () =>
      import('./dkv-offers/dkv-offers.module').then((m) => m.DkvOffersModule),
  },
  {
    path: 'ea-offers',
    data: { breadcrumb: 'Ea' },
    loadChildren: () =>
      import('./ea-offers/ea-offers.module').then((m) => m.EaOffersModule),
  },
  /* { path: '**', redirectTo: '/notfound' } */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsurersRoutingModule {}
