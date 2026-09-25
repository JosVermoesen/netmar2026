import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DkvOffersOverviewComponent } from './dkv-offers-overview/dkv-offers-overview-component';

const routes: Routes = [{ path: '', component: DkvOffersOverviewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DkvOffersRoutingModule {}
