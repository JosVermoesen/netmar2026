import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../services/account-service';
import { map, of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService);
  const router = inject(Router);

  if (accountService.currentUser()) {
    // User is authenticated, allow access
    return of(true);
  } else {
    return accountService.getAuthState().pipe(
      map((auth) => {
        if (auth.isAuthenticated) {
          // User is authenticated, allow access
          return true;
        } else {
          // User is not authenticated, redirect to login page
          router.navigate(['/account/login'], {
            queryParams: { returnUrl: state.url },
          });
          return false;
        }
      })
    );
  }
};
