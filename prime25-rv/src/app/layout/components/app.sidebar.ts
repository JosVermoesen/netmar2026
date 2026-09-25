import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { AppMenu } from './app.menu';
import { LayoutService } from '@/layout/service/layout.service';
import { RouterModule } from '@angular/router';

@Component({
    selector: '[app-sidebar]',
    standalone: true,
    imports: [AppMenu, RouterModule],
    changeDetection: ChangeDetectionStrategy.Eager,
    template: `
        <div class="layout-sidebar" (mouseenter)="onMouseEnter()" (mouseleave)="onMouseLeave()">
            <div class="sidebar-header">
                <a [routerLink]="['/']" class="app-logo">
                    <img src="images/OIP.png" alt="Image" height="35" class="align-self-center" />
                </a>
                <button class="layout-sidebar-anchor p-link z-2" type="button" (click)="anchor()"></button>
            </div>

            <div #menuContainer class="layout-menu-container">
                <app-menu></app-menu>
            </div>
            <div class="mt-auto">
                <hr class="mb-3 mx-3 border-top-1 border-none surface-border" />
                <a pRipple routerLink="/contactus" class="m-3 flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors">
                    <span>
                        <i class="pi pi-info-circle text-xl text-primary"></i>
                    </span>
                    <div class="ml-3">
                        <span class="font-medium">Contact</span>
                    </div>
                </a>
            </div>
        </div>
    `
})
export class AppSidebar {
    timeout: any = null;

    @ViewChild('menuContainer') menuContainer!: ElementRef;
    constructor(
        public layoutService: LayoutService,
        public el: ElementRef
    ) {}

    onMouseEnter() {
        if (!this.layoutService.layoutState().anchored) {
            if (this.timeout) {
                clearTimeout(this.timeout);
                this.timeout = null;
            }

            this.layoutService.layoutState.update((state) => {
                if (!state.sidebarActive) {
                    return {
                        ...state,
                        sidebarActive: true
                    };
                }
                return state;
            });
        }
    }

    onMouseLeave() {
        if (!this.layoutService.layoutState().anchored) {
            if (!this.timeout) {
                this.timeout = setTimeout(() => {
                    this.layoutService.layoutState.update((state) => {
                        if (state.sidebarActive) {
                            return {
                                ...state,
                                sidebarActive: false
                            };
                        }
                        return state;
                    });
                }, 300);
            }
        }
    }

    anchor() {
        this.layoutService.layoutState.update((state) => ({
            ...state,
            anchored: !state.anchored
        }));
    }
}
