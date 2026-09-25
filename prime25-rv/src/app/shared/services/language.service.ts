import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const LNG_KEY = 'v_language';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    selected = '';
    ts = inject(TranslateService);

    setInitialAppLanguage() {
        const language = this.ts.getBrowserLang() || 'en';
        this.ts.setDefaultLang(language);

        const val = localStorage.getItem(LNG_KEY);
        if (val) {
            this.setLanguage(val);
            this.selected = val;
        } else {
            this.setLanguage(language);
        }
    }

    getLanguages() {
        return [
            {
                text: 'Nederlands',
                subtext: 'Vlaanderen, Brussel',
                value: 'nl',
                img: 'images/flags/nl_small.png',
                enabled: true
            },
            {
                text: 'Français',
                subtext: 'La Wallonie, Bruxelles',
                value: 'fr',
                img: 'images/flags/fr_small.png',
                enabled: false
            },
            {
                text: 'Deutsch',
                subtext: 'Ostbelgien',
                value: 'de',
                img: 'images/flags/de_small.png',
                enabled: false
            },
            {
                text: 'English',
                subtext: '',
                value: 'en',
                img: 'images/flags/en_small.png',
                enabled: false
            }
        ];
    }

    setLanguage(lng: string) {
        this.ts.use(lng);
        this.selected = lng;
        localStorage.setItem(LNG_KEY, lng);
    }
}
