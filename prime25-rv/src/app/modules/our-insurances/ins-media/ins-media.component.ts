import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { LayoutService } from '@/layout/service/layout.service';
import { SelectModule } from 'primeng/select';

interface YoutubeVideo {
    name: string;
    url: string;
}

@Component({
    selector: 'app-ins-media',
    templateUrl: './ins-media.component.html',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [FormsModule, SelectModule]
})
export class InsMediaComponent implements OnInit {
    videos: YoutubeVideo[] = [];
    selectedVideo!: YoutubeVideo;
    public safeUrl!: SafeResourceUrl;

    constructor(
        private layoutService: LayoutService,
        private sanitizer: DomSanitizer
    ) {}

    // https://www.youtube.com/embed/M3lODhCBHuw

    ngOnInit(): void {
        // const lang = this.layoutService.config.language;
        const lang = 'nl';

        if (lang == 'nl') {
            this.videos = [
                {
                    name: 'Europ Assistance: Reisverzekeringen Jaarlijks',
                    url: 'https://www.youtube.com/embed/SbG8oC9_AFE'
                },
                {
                    name: 'Kanaal Z: Pensioen bijsparen - BALOISE, AXA, VIVIUM',
                    url: 'https://www.youtube.com/embed/M3lODhCBHuw'
                },
                {
                    name: 'Baloise Insurance: Familiale Verzekering',
                    url: 'https://www.youtube.com/embed/bD_KEjJd0Bk'
                },
                {
                    name: 'Baloise Insurance Ongevallenverzekering',
                    url: 'https://www.youtube.com/embed/u0z_dRgfy4g'
                }
            ];
        } else {
            this.videos = [
                {
                    name: 'Canal Z: Épargne-retraite - BALOISE, AXA, VIVIUM',
                    url: 'https://www.youtube.com/embed/KaoRNMnHuZY'
                },
                {
                    name: 'Baloise Insurance: Assurance Familiale',
                    url: 'https://www.youtube.com/embed/9Z3JNoZAFqA'
                },
                {
                    name: 'Baloise Insurance: Assurance Accidents En Sécurité',
                    url: 'https://www.youtube.com/embed/DwDAtN1tz3Y'
                }
            ];
        }
    }

    onChange(selected: YoutubeVideo) {
        console.log(selected);
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(selected.url);
    }
}
