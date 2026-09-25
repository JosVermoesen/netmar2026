import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Ripple, RippleModule } from 'primeng/ripple';
import { ButtonDirective, ButtonModule } from 'primeng/button';
import { PrimeTemplate } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { Textarea } from 'primeng/textarea';

import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { TranslateModule } from '@ngx-translate/core';

interface YoutubeVideo {
    name: string;
    url: string;
}

@Component({
    selector: 'app-jff-media',
    templateUrl: './jff-media.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [SelectModule, FormsModule, RippleModule, Textarea, DialogModule, ButtonModule, TranslateModule]
})
export class JffMediaComponent implements OnInit {
    videos: YoutubeVideo[] = [];
    selectedVideo!: YoutubeVideo;
    safeUrl!: SafeResourceUrl;
    value!: string;
    showAddToValueDialog = false;

    constructor(private sanitizer: DomSanitizer) {}

    // Nelly Furtado - Promiscuous
    // https://www.youtube.com/embed/0J3vgcE5i2o?si=0a0rmyiuh-4mHtZF

    ngOnInit(): void {
        /* this.videos = [
      {
        name: 'Electronics Fundamentals',
        url: 'https://www.youtube.com/embed/WlUOr4z3Lbs?si=HMD2lQnFTmyloGXj',
      },
      {
        name: 'The 50 Most Popular Linux & Terminal Commands',
        url: 'https://www.youtube.com/embed/ZtqBQ68cfJc?si=dFy9xF2OVXntHEcq',
      },
      {
        name: 'Gorgo 1961 | Horror, Sci-Fi',
        url: 'https://www.youtube.com/embed/IcShzxpHUig?si=DTePI7buUcyIKm80',
      },
      {
        name: 'Louis De Funès',
        url: 'https://www.youtube.com/embed/x0QrtGIXpyM?si=5rOdukTtQ4AfF9zG',
      },
      {
        name: 'HORROR: Peter Cushing',
        url: 'https://www.youtube.com/embed/l-KpsChMzH4?si=PJ6HeJKubjHNALnq',
      },
      {
        name: 'Christopher Lee talks Special Forces and receives an incredible gift',
        url: 'https://www.youtube.com/embed/yUSHMUVu-Xk?si=3EsaHU3fOBICxlNl',
      },
      {
        name: 'Christopher Lee, Memories of World War II',
        url: 'https://www.youtube.com/embed/KekVxm28wJ4?si=oaKuKOIwpC7eifxM',
      },
      {
        name: 'Theatre of Death 1967 Christopher Lee',
        url: 'https://www.youtube.com/embed/ni3R4kAGA1c?si=kQWdz0MlgaJUUbbv',
      },
      {
        name: 'Mind your language',
        url: 'https://www.youtube.com/embed/W6PAD2wXoCQ?si=UIooqMRQ45eZiseL',
      },
      {
        name: 'CURSE OF DRACULA',
        url: 'https://www.youtube.com/embed/TBH5mS5q-7Y?si=k8fQ2zH1sSWo9X54',
      },
      {
        name: 'And Now For Something Completely Different',
        url: 'https://www.youtube.com/embed/u945Sc3B2Hs?si=IZK7ajJdZKCa7lE3',
      },
      {
        name: 'Sherlock Holmes In New York with Roger Moore',
        url: 'https://www.youtube.com/embed/V73PnpkmlTQ?si=g4K_qhba3EevA0qg',
      },
      {
        name: 'Harvard Programming with Python - Full University Course',
        url: 'https://www.youtube.com/embed/nLRL_NcnK-4?si=fOpf9yaIDdjPAyG9',
      },
      {
        name: 'Aaliyah Dana Haughton (Baby Girl) -Try Again (2000)',
        url: 'https://www.youtube.com/embed/qTA0RuZoIxM',
      },
      {
        name: 'Nelly Furtado - Say It Right (2006)',
        url: 'https://www.youtube.com/embed/6JnGBs88sL0',
      },
      {
        name: 'Prince Buster - Whine and grine (1976)',
        url: 'https://www.youtube.com/embed/YSq93zne8AM',
      },
      {
        name: 'Prince Buster - Nothing takes the place of you (1967)',
        url: 'https://www.youtube.com/embed/-aW8G4M93fk',
      },
      {
        name: 'Byron Lee & The Dragonaires - Jamaican Ska (1964)',
        url: 'https://www.youtube.com/embed/xyrhw6dkXkM',
      },
      {
        name: 'Prince Buster And All Stars - Take It Easy (Champs-Élysées 1967)',
        url: 'https://www.youtube.com/embed/Ya_QZXqHyZ4',
      },
      {
        name: 'Prince Buster, Suggs & Georgie Fame - Madness (1992)',
        url: 'https://www.youtube.com/embed/WE8FATuziSc',
      },
      {
        name: 'Prince Buster - Al Capone (1964)',
        url: 'https://www.youtube.com/embed/k614Yh8Wl60',
      },
      {
        name: 'Prince Buster - Whine and grine (1998)',
        url: 'https://www.youtube.com/embed/JAqNhbFbUSs',
      },
      {
        name: 'Prince Buster - Enjoy Yourself (1998)',
        url: 'https://www.youtube.com/embed/ylXI0CW--R4',
      },
      {
        name: 'PRINCE BUSTER ALL STARS CITY RIOT',
        url: 'https://www.youtube.com/embed/b_lfSFZbvDo?si=E8iOazoH3UNfoqls',
      },
      {
        name: 'Etiènne Vermeersch - Over overbevolking 2012',
        url: 'https://www.youtube.com/embed/tsb8Rwckv1c',
      },
      {
        name: 'Bart De Wever & Etiènne Vermeersch - Reyers Laat 2015',
        url: 'https://www.youtube.com/embed/2riSW6p_Y_w',
      },
      {
        name: 'JMJ - Fishing Junks At Sunset 1981',
        url: 'https://www.youtube.com/embed/3jMame1N6VU',
      },
      {
        name: 'Scott Storch - Top 10 Beats 2019',
        url: 'https://www.youtube.com/embed/K1cwncWCwlw',
      },
      {
        name: 'De La Soul - Saturdays 1989',
        url: 'https://www.youtube.com/embed/9S5lTgyfT2c',
      },
      {
        name: 'Ofelia - Should I Stay Or Should I Go 2015',
        url: 'https://www.youtube.com/embed/CFu3dAqlwXg',
      },
      {
        name: 'The Great Dictator - Speech 1940',
        url: 'https://www.youtube.com/embed/uV14Anxoqq4',
      },
      {
        name: 'Timbaland',
        url: 'https://www.youtube.com/embed/ggXsDBbOBhI',
      },
      {
        name: 'Rema, Selena Gomez - Calm Down',
        url: 'https://www.youtube.com/embed/WcIcVapfqXw',
      },
      {
        name: 'Ricky Gervais - No Censorship 2019',
        url: 'https://www.youtube.com/embed/4p4Cs2IVSXw',
      },
      {
        name: 'Meco - Star Wars (Disco 1977)',
        url: 'https://www.youtube.com/embed/uJ3kV3Icm28',
      },
      {
        name: 'Michelle Krummel - LaTeX Course 2019',
        url: 'https://www.youtube.com/embed/videoseries?list=PL1D4EAB31D3EBC449',
      },
    ]; */
        this.videos = [
            {
                name: 'Mind your language',
                url: 'https://www.youtube.com/embed/2bXl7Rr1plE?si=dHOaVqqsw2cl-azj'
            }
        ];
    }

    onChange(selected: YoutubeVideo) {
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(selected.url);
    }

    changedEditor() {
        if (this.value.includes('https')) {
            this.filterHttps();
        }
    }

    filterHttps() {
        if (this.value.startsWith('https', 0)) {
            // just check last character not to be quote
            const quoteStart = this.value.indexOf('"');
            if (!quoteStart) {
                // string is missing any '"', so should be ready
            } else {
                const resultHttps = this.value.substring(0, quoteStart);
                this.value = resultHttps;
            }
            return;
        } else {
            const startHttps = this.value.indexOf('https');
            if (!startHttps) {
                this.value = 'Paste here a https embedded link from YT';
                return;
            }

            const subHttps = this.value.substring(startHttps);
            const quoteStart = subHttps.indexOf('"');
            if (!quoteStart) {
                // string is missing any '"', so should be ready
                this.value = subHttps;
            } else {
                const resultHttps = subHttps.substring(0, quoteStart);
                this.value = resultHttps;
            }
            this.showAddToValueDialog = true;
            return;
        }
    }

    addLinkToPlaylist() {
        this.videos.push({
            name: 'Whatever',
            url: this.value
        });
        this.showAddToValueDialog = false;
        this.value = '';
    }
}
