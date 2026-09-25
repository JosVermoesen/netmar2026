import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountingOverviewComponent } from './accounting-overview.component';
import { AccountingOverviewRoutingModule } from './accounting-overview-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AccountingOverviewRoutingModule,

    AccountingOverviewComponent,
  ],
})
export class AccountingOverviewModule {}
