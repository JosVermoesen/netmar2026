import { AccountService } from '@/core/services/account-service';
import { InitService } from '@/core/services/init.service';
import { LayoutService } from '@/layout/service/layout.service';
import { LanguageService } from '@/shared/services/language.service';
import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from './environments/environment';

@Component({
    selector: 'app-root',
    imports: [RouterModule, TranslateModule],
    changeDetection: ChangeDetectionStrategy.Eager,
    template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
    useMar = environment.useMar;
    useShop = environment.useShop;
    lang = inject(LanguageService);
    layoutService = inject(LayoutService);
    private initService = inject(InitService);
    private accountService = inject(AccountService);

    ngOnInit(): void {
        this.lang.setInitialAppLanguage(); // sets the initial language of the app
        this.layoutService.loadConfig(); // sets the initial layout of the app

        if (this.useShop) {
            this.initService.init(); // initializes the app
        }
        if (this.useMar) {
            this.accountService.getUserInfo().subscribe(); // initializes the account service
        }

        /* this.accountService.getUserInfo().subscribe(userInfo => {
            console.log(userInfo);
        }); */
    }
}
