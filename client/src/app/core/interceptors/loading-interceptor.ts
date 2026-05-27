import { HttpInterceptorFn } from '@angular/common/http';
import { delay, finalize } from 'rxjs';
import { BusyService } from '../services/busy-service';
import { inject } from '@angular/core';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const busyService = inject(BusyService); // Assuming busyService is globally available

  busyService.busy(); // Indicate that a request is in progress

  return next(req).pipe(
    delay(500), // Simulate a delay for demonstration purposes
    finalize(() => busyService.idle()) // Indicate that the request has completed
  );
};
