import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsMediaComponent } from './ins-media.component';
import { InsMediaRoutingModule } from './ins-media-routing.module';

@NgModule({
  imports: [CommonModule, InsMediaRoutingModule, InsMediaComponent],
})
export class InsMediaModule {}
