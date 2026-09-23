import { HttpInterceptorFn } from '@angular/common/http';
import { delay, finalize, identity } from 'rxjs';
import { BusyService } from '../services/busy-service';
import { inject } from '@angular/core';
import { environment } from '../../../environments/environment';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const busyService = inject(BusyService); // Assuming busyService is globally available

  busyService.busy(); // Indicate that a request is in progress

  return next(req).pipe(
    (environment.production ? identity : delay(500)), // Simulate a delay for demonstration purposes    
    finalize(() => busyService.idle()) // Indicate that the request has completed
  );
};
