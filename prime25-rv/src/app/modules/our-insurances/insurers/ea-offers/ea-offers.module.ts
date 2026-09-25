import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EaOffersRoutingModule } from './ea-offers-routing.module';
import { EaOffersOverviewComponent } from './ea-offers-overview/ea-offers-overview-component';

@NgModule({
  imports: [CommonModule, EaOffersRoutingModule, EaOffersOverviewComponent],
})
export class EaOffersModule {}
