import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        data: { breadcrumb: 'Overview' },
        loadChildren: () =>
          import('./accounting-overview/accounting-overview.module').then(
            (m) => m.AccountingOverviewModule
          ),
      },
      {
        path: 'overview',
        data: { breadcrumb: 'Overview' },
        loadChildren: () =>
          import('./accounting-overview/accounting-overview.module').then(
            (m) => m.AccountingOverviewModule
          ),
      },
      { path: '**', redirectTo: '/notfound' }
    ]),
  ],
  exports: [RouterModule],
})
export class AccountingRoutingModule {}
