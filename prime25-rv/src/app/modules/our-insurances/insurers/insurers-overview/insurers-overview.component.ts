import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PhotoService } from 'src/app/shared/services/photo.service';
import { SeoService } from 'src/app/shared/services/seo.service';

import { Browser } from '@capacitor/browser';
import { Router } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { Ripple } from 'primeng/ripple';
import { ButtonDirective } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

import { PrimeTemplate } from 'primeng/api';
import { GalleriaModule } from 'primeng/galleria';
import { Carousel, CarouselModule } from 'primeng/carousel';
import { IInsurer } from '../../shared/models/insurer';
import { InsurerService } from '../../shared/services/insurer.service';

@Component({
    selector: 'app-insurers-overview',
    templateUrl: './insurers-overview.component.html',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [GalleriaModule, DialogModule, FormsModule, ButtonDirective, Ripple, TranslateModule]
})
export class InsurersOverviewComponent implements OnInit {
    dialogVisible = false;
    autoPlay = true;
    radioChoise = '';

    insurers!: IInsurer[];

    galleriaResponsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '960px',
            numVisible: 4
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(
        private seoS: SeoService,
        private insurerService: InsurerService,
        private router: Router
    ) {}

    ngOnInit(): void {
        // this.seoS.setAll('INSURERS');
        this.insurerService.getAll('insurers').then((result: IInsurer[]) => {
            this.insurers = result || [];
        });
    }

    async imageClick(companyUrl: string) {
        this.autoPlay = false;
        Browser.open({ url: companyUrl });
    }

    offersOf(offersUrl: string) {
        if (offersUrl != '') {
            this.router.navigateByUrl(this.router.url + offersUrl);
        }
    }
}
