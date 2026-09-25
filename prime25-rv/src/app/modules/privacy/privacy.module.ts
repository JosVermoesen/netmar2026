import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivacyRoutingModule } from './privacy-routing.module';
import { PrivacyComponent } from './privacy.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@NgModule({
  imports: [CommonModule, PrivacyRoutingModule, PrivacyComponent],
  providers: [DialogService, DynamicDialogRef]
})
export class PrivacyModule {}
