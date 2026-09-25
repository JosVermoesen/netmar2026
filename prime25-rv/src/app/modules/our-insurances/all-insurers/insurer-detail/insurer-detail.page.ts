import { Insurer } from '@/shared/models/insurer';
import { InsurerService } from '@/shared/services/insurer.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-insurer-detail',
    templateUrl: './insurer-detail.page.html',
    styleUrls: ['./insurer-detail.page.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: []
})
export class InsurerDetailPage implements OnInit {
    loadedInsurer!: Insurer;

    constructor(
        private activatedRoute: ActivatedRoute,
        private insurerService: InsurerService,
        private router: Router
    ) {}

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((paramMap) => {
            if (!paramMap.has('insurerId')) {
                // redirect
                this.router.navigate(['/insurers']);
                return;
            }
            const insurerId = paramMap.get('insurerId') as string;
            this.loadedInsurer = this.insurerService.getInsurer(insurerId) as Insurer;
        });
    }

    async onClipTest(comType: string) {
        /* Clipboard.write({
      string: comType
    });

    const str = await Clipboard.read({
      type: 'string'
    }); */
    }

    onCall(comNumber: string) {
        window.open('tel:' + comNumber, '_system');
    }

    onMail(address: string) {
        const subject = '?subject=' + this.loadedInsurer.name;
        window.open('mailto:' + address + subject, '_system');
    }
}
