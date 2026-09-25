import { Component, computed, inject, ChangeDetectionStrategy } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { BadgeModule } from 'primeng/badge';
import { LayoutService } from '@/layout/service/layout.service';
import { AccountService } from '@/core/services/account-service';
import { CookieService } from 'ngx-cookie-service'; // Assuming you have a CookieService for cookie management

@Component({
    selector: '[app-profilesidebar]',
    imports: [ButtonModule, DrawerModule, BadgeModule],
    changeDetection: ChangeDetectionStrategy.Eager,
    templateUrl: './app.profilesidebar.html'
})
export class AppProfileSidebar {
    public layoutService = inject(LayoutService);
    public accountService = inject(AccountService);
    private cookieService = inject(CookieService); // Assuming you have a CookieService for cookie management

    visible = computed(() => this.layoutService.layoutState().profileSidebarVisible);

    onDrawerHide() {
        this.layoutService.layoutState.update((state) => ({
            ...state,
            profileSidebarVisible: false
        }));
    }

    cookiesCheck() {
        const allCookies = this.cookieService.getAll(); // Get all cookies
        console.log('All cookies:', allCookies); // Log all cookies for debugging
        const cookieNames = Object.keys(allCookies); // Extract cookie names
        console.log('Cookie names:', cookieNames); // Log cookie names for debugging
        // return cookieNames.length > 0; // Return true if there are any cookies
    }

    signOut() {
        this.accountService.logout().subscribe({
            next: () => {
                this.accountService.currentUser.set(null);
            },
            error: (error) => {
                console.error('Logout failed:', error);
            },
            complete: () => {
                this.layoutService.layoutState.update((state) => ({
                    ...state,
                    profileSidebarVisible: false
                }));
            }
        });
    }
}
