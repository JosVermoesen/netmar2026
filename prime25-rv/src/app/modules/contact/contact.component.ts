import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslateService, TranslateModule } from '@ngx-translate/core';

import { environment } from '../../../environments/environment';
import { Contactmail } from 'src/app/shared/models/contactmail';
import { SeoService } from 'src/app/shared/services/seo.service';

import { MailService } from 'src/app/shared/services/mail.service';

import { ModalMeetupComponent } from './modal-meetup/modal-meetup.component';
import { ModalOfficeInfoComponent } from './modal-officeinfo/modal-office-info.component';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { Ripple } from 'primeng/ripple';
import { ButtonDirective } from 'primeng/button';

import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [ButtonDirective, Ripple, RouterLink, FormsModule, ReactiveFormsModule, InputTextModule, CheckboxModule, TranslateModule, DynamicDialogModule]
})
export class ContactComponent implements OnInit {
    waitMilliseconds = 2000;
    busy = false;
    alerts: any[] = [{}];

    contactMail!: Contactmail;
    templateName = 'contact.html';

    mailSubject!: string;
    templateBody = '';

    contactForm!: FormGroup;
    urlEmail = '';
    urlName = '';
    urlPhone = '';
    urlRr = '';

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private http: HttpClient,
        private seoS: SeoService,
        // private toastr: ToastrService,
        private fb: FormBuilder,
        private ds: DialogService,
        private ms: MailService,
        private ts: TranslateService
    ) {}

    ngOnInit(): void {
        // TODO: check to let it work with the routerLink
        // http://localhost:4200/#/contact?email=josvermoesen@outlook.be&name=joske
        /* this.activatedRoute.queryParams.subscribe((params) => {
      if ((params = {})) {
        console.log('no params');
      } else {
        console.log(params);
        this.urlEmail = params['email'];
        this.urlName = params['name'];
        this.urlPhone = params['phone'];
        this.urlRr = params['rR'];
        console.log('email is: ' + this.urlEmail);
        console.log('name is ' + this.urlName);
      }
    }); */
        this.seoS.setAll('CONTACT');
        this.initTemplate();
    }

    initTemplate() {
        this.http
            .get('templates/mail/' + this.templateName, {
                responseType: 'text'
            })
            .subscribe((data) => {
                // console.log(data);
                this.templateBody = data;
                this.createContactForm();
            });

        /* this.http
      .get('assets/rv2007_jpg.base64', {
        responseType: 'text',
      })
      .subscribe((imageData) => {
        // console.log(imageData);
        this.imageHeaderData = imageData;
      }); */
    }

    createContactForm() {
        this.ts.get('CONTACT.MessageTitle').subscribe((res: string) => {
            this.mailSubject = res;
        });

        this.contactForm = this.fb.group({
            subject: [this.mailSubject, Validators.required],
            name: [this.urlName, Validators.required],
            rR: [this.urlRr, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
            email: [this.urlEmail, Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')])],
            phone: [this.urlPhone],
            copySender: [true],
            message: ['', Validators.required],
            template: [this.templateBody],
            data: [null],
            apiGuid: [environment.apiVsoftMailGuid, Validators.required],
            apiMailKey: [environment.apiVsoftSendFromAddress, Validators.required],
            apiNameKey: [environment.apiVsoftSendFromName, Validators.required]
        });
        // console.log(this.contactForm.value);
    }

    refreshTemplateBody() {
        /* const cHeaderImage = '.{image}';
    // headerimage insert
    this.templateBody = this.templateBody.replace(
      cHeaderImage,
      this.imageHeaderData
    ); */

        const stringNameToReplace = '.{name}';
        // name insert
        this.templateBody = this.templateBody.replace(stringNameToReplace, this.contactForm.value.name);

        const stringInBlockToReplace = '.{message}';
        // name insert
        this.templateBody = this.templateBody.replace(stringInBlockToReplace, this.contactForm.value.message);

        this.contactForm.value.template = this.templateBody;
        // console.log(this.form.value);
    }

    submitContactMail() {
        this.refreshTemplateBody();
        // console.log(this.form.value);
        this.contactMail = Object.assign({}, this.contactForm.value);
        this.busy = true;
        this.ms.sendMail(this.contactMail).subscribe({
            next: () => {
                this.ts.get('CONTACT.SendSuccess').subscribe((res: string) => {
                    // this.toastr.info(res);
                    console.log('mail sent', res);
                });
            },
            error: () => {
                this.ts.get('CONTACT.SendFailed').subscribe((res: string) => {
                    // this.toastr.error(res);
                    console.log('mail send error', res);
                    this.busy = false;
                });
            },
            complete: () => {
                setTimeout(() => {
                    this.router.navigate(['/']);
                }, this.waitMilliseconds);
                this.busy = false;
            }
        });
    }

    /* ngxAlert(ofType: string, message: string): void {
    this.alerts.push({
      type: ofType,
      msg: message,
      timeout: this.waitMilliseconds,
    });
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter((alert) => alert !== dismissedAlert);
  } */

    onOfficeModal() {
        const lblTitle = 'Kantoorgegevens';
        const lblCloseBtnName = 'Sluiten';

        const initialState = {
            header: lblTitle,
            width: '80%',
            data: {}
        };
        const ref = this.ds.open(ModalOfficeInfoComponent, initialState);
        ref?.onClose.subscribe((result) => {
            console.log(result);
        });
    }

    onMeetupModal() {
        const lblTitle = 'MeetUp';
        const lblCloseBtnName = 'Sluiten';

        const initialState = {
            header: lblTitle,
            width: '50%',
            data: {}
        };
        const ref = this.ds.open(ModalMeetupComponent, initialState);
        ref?.onClose.subscribe((result) => {
            console.log(result);
        });
    }
}
