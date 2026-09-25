import { HttpClient, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
import Aura from '@primeng/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { appRoutes } from './app.routes';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { errorInterceptor } from '@/core/interceptors/error-interceptor';
import { loadingInterceptor } from '@/core/interceptors/loading-interceptor';
import { authInterceptor } from '@/core/interceptors/auth-interceptor';
import { InitService } from '@/core/services/init.service';
import { lastValueFrom } from 'rxjs';

import { ApplicationConfig, importProvidersFrom, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DialogService } from 'primeng/dynamicdialog';

const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) => new TranslateHttpLoader(http, './i18n/', '.json');

function initializeApp(initService: InitService) {
    return () =>
        lastValueFrom(initService.init()).finally(() => {
            const splash = document.getElementById('initial-splash');
            if (splash) {
                splash.remove();
            }
        });
}

export const appConfig: ApplicationConfig = {
    providers: [
        // provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(appRoutes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }), withEnabledBlockingInitialNavigation()),
        // PrimeNG overlays/menus still depend on Angular's animation engine.
        // Keep this until PrimeNG fully adopts animate.enter/animate.leave.
        provideAnimationsAsync(),
        provideHttpClient(withFetch(), withInterceptors([errorInterceptor, loadingInterceptor, authInterceptor])),
        provideAppInitializer(() => {
            const initialzerFn = initializeApp(inject(InitService));
            return initialzerFn();
        }),
        importProvidersFrom([
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: httpLoaderFactory,
                    deps: [HttpClient]
                }
            })
        ]),
        DialogService,
        providePrimeNG({ theme: { preset: Aura, options: { darkModeSelector: '.app-dark' } } })
    ]
};
