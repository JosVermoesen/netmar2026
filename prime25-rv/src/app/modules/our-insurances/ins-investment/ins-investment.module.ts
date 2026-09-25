import { NgModule, Sanitizer } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsInvestmentRoutingModule } from './ins-investment-routing.module';
import { InsInvestmentComponent } from './ins-investment.component';
import { ContentfulService } from 'src/app/shared/services/contentful.service';

@NgModule({
  imports: [CommonModule, InsInvestmentRoutingModule, InsInvestmentComponent],
  providers: [ContentfulService],
})
export class InsInvestmentModule {}
