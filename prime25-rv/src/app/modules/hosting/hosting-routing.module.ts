import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        data: { breadcrumb: 'Overview' },
        loadChildren: () =>
          import('./hosting-overview/hosting-overview.module').then(
            (m) => m.HostingOverviewModule
          ),
      },
      {
        path: 'overview',
        data: { breadcrumb: 'Overview' },
        loadChildren: () =>
          import('./hosting-overview/hosting-overview.module').then(
            (m) => m.HostingOverviewModule
          ),
      },
      { path: '**', redirectTo: '/notfound' }
    ]),
  ],
  exports: [RouterModule],
})
export class HostingRoutingModule {}
