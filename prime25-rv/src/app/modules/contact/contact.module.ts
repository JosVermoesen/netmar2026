import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';

import { ContactComponent } from './contact.component';
import { ModalMeetupComponent } from './modal-meetup/modal-meetup.component';
import { ModalOfficeInfoComponent } from './modal-officeinfo/modal-office-info.component';
import { DialogService } from 'primeng/dynamicdialog';

@NgModule({
    imports: [CommonModule, ContactRoutingModule, ContactComponent, ModalMeetupComponent, ModalOfficeInfoComponent],
    providers: [DialogService]
})
export class ContactModule {}
