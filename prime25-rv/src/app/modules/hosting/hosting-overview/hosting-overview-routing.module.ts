import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostingOverviewComponent } from './hosting-overview.component';

const routes: Routes = [{ path: '', component: HostingOverviewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HostingOverviewRoutingModule {}
