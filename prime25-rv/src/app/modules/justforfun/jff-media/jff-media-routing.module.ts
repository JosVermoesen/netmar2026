import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JffMediaComponent } from './jff-media.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: JffMediaComponent }])],
  exports: [RouterModule],
})
export class JffMediaRoutingModule {}
