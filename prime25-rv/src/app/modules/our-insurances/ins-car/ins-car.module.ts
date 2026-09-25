import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsCarRoutingModule } from './ins-car-routing.module';
import { InsCarComponent } from './ins-car.component';

import {} from '@angular/common/http';

@NgModule({
  imports: [CommonModule, InsCarRoutingModule, InsCarComponent],
})
export class InsCarModule {}
