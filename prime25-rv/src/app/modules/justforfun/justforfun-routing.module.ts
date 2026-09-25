import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      /* {
        path: 'overview',
        data: { breadcrumb: 'Overview' },
        loadChildren: () =>
          import(
            '../insurances/insurances-overview/insurance-overview.module'
          ).then((m) => m.InsuranceOverviewModule),
      }, */
      {
        path: 'jff-media',
        data: { breadcrumb: 'InsurancesMedia' },
        loadChildren: () =>
          import('../justforfun/jff-media/jff-media.module').then(
            (m) => m.JffMediaModule
          ),
      },
      /* { path: '**', redirectTo: '/notfound' } */
    ]),
  ],
  exports: [RouterModule],
})
export class JustForFunRoutingModule {}
