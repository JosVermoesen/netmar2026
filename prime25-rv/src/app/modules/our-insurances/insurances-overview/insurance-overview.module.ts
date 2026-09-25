import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsuranceOverviewComponent } from './insurance-overview.component';
import { InsuranceOverviewRoutingModule } from './insurance-overview-routing.module';

@NgModule({
  imports: [
    CommonModule,

    InsuranceOverviewRoutingModule,
    InsuranceOverviewComponent,
  ],
})
export class InsuranceOverviewModule {}
