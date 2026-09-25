import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JffMediaComponent } from './jff-media.component';
import { JffMediaRoutingModule } from './jff-media-routing.module';

@NgModule({
  imports: [CommonModule, JffMediaRoutingModule, JffMediaComponent],
})
export class JffMediaModule {}
