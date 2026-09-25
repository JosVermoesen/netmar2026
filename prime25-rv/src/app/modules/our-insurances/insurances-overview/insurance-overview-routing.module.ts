import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceOverviewComponent } from './insurance-overview.component';

const routes: Routes = [{ path: '', component: InsuranceOverviewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsuranceOverviewRoutingModule { }
