import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { AppComponent } from './app';
import { environment } from './environments/environment';
import { enableProdMode, provideZoneChangeDetection } from '@angular/core';

if (environment.production) {
    enableProdMode();
}
// disable any console.log debugging statements in production mode
/* window.console.log = function () {
    ('');
}; */

bootstrapApplication(AppComponent, {...appConfig, providers: [provideZoneChangeDetection(), ...appConfig.providers]}).catch((err) => console.error(err));
