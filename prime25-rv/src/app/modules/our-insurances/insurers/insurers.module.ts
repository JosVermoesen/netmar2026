import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsurersRoutingModule } from './insurers-routing.module';
import { InsurersOverviewComponent } from './insurers-overview/insurers-overview.component';


@NgModule({
  imports: [CommonModule, InsurersRoutingModule, InsurersOverviewComponent],
})
export class InsurersModule {}
