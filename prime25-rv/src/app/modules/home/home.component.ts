import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SeoService } from 'src/app/shared/services/seo.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    templateUrl: './home.component.html',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [TranslateModule]
})
export class HomeComponent implements OnInit {
    constructor(private seoS: SeoService) {}

    ngOnInit() {
        this.seoS.setAll('HOME');
    }
}
