import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InsMediaComponent } from './ins-media.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: InsMediaComponent }])],
  exports: [RouterModule],
})
export class InsMediaRoutingModule {}
