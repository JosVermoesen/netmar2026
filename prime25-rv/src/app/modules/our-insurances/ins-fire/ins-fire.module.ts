import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsFireRoutingModule } from './ins-fire-routing.module';
import { InsFireComponent } from './ins-fire.component';

@NgModule({
  imports: [CommonModule, InsFireRoutingModule, InsFireComponent],
})
export class InsFireModule {}
