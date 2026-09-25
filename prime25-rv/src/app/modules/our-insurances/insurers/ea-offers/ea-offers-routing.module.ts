import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EaOffersOverviewComponent } from './ea-offers-overview/ea-offers-overview-component';

const routes: Routes = [{ path: '', component: EaOffersOverviewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EaOffersRoutingModule {}
