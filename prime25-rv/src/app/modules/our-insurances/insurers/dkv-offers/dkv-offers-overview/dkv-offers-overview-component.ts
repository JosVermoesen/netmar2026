import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Browser } from '@capacitor/browser';

import { SeoService } from 'src/app/shared/services/seo.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

import { Ripple } from 'primeng/ripple';
import { ButtonDirective } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { PrimeTemplate } from 'primeng/api';
import { GalleriaModule } from 'primeng/galleria';
import { IOffers } from '@/modules/our-insurances/shared/models/offers';
import { InsurerService } from '@/modules/our-insurances/shared/services/insurer.service';

@Component({
    selector: 'app-dkv-offers-overview',
    templateUrl: './dkv-offers-overview-component.html',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [GalleriaModule, PrimeTemplate, DialogModule, FormsModule, ButtonDirective, Ripple, TranslateModule]
})
export class DkvOffersOverviewComponent {
    dialogVisible = false;
    radioChoise = '';
    readonly galleriaStyle = { width: '100%', display: 'block' };
    readonly galleriaContainerStyle = { width: '100%', 'max-width': '800px', margin: '0 auto' };

    offers!: IOffers[];
    public safeUrl!: SafeResourceUrl;

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

    carouselResponsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    constructor(
        private seoS: SeoService,
        private insurerService: InsurerService,
        private sanitizer: DomSanitizer,
        private router: Router
    ) {}

    ngOnInit(): void {
        // this.seoS.setAll('INSURERS');
        this.insurerService.getOffers('dkv').then((result: IOffers[]) => {
            this.offers = result;
            this.sanitize(this.offers[1].youTubeVideo);
        });
    }

    async navigateUrl(urlToNavigate: string, internal: boolean) {
        if (internal) {
            console.log(urlToNavigate, internal);
            this.router.navigateByUrl(this.router.url + urlToNavigate);
        } else {
            Browser.open({ url: urlToNavigate });
        }
    }

    sanitize(url: string) {
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
