import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostingOverviewRoutingModule } from './hosting-overview-routing.module';
import { HostingOverviewComponent } from './hosting-overview.component';

@NgModule({
  imports: [
    CommonModule,
    HostingOverviewRoutingModule,

    HostingOverviewComponent,
  ],
})
export class HostingOverviewModule {}
