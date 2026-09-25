import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DkvOffersRoutingModule } from './dkv-offers-routing.module';
import { DkvOffersOverviewComponent } from './dkv-offers-overview/dkv-offers-overview-component';

@NgModule({
  imports: [CommonModule, DkvOffersRoutingModule, DkvOffersOverviewComponent],
})
export class DkvOffersModule {}
