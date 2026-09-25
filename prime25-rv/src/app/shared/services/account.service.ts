import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, ReplaySubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

// import { Contactmail } from '../_models/contactmail';

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    tmpUser: any;
    baseUrl = environment.apiUrl;
    private currentUserSource = new BehaviorSubject<User | null>(null);
    currentUser$ = this.currentUserSource.asObservable();

    current2WayCheckSource = new BehaviorSubject<string | null>(null);
    current2WayCheck$ = this.current2WayCheckSource.asObservable();

    constructor(
        private http: HttpClient,
        private router: Router
    ) {}

    /* login(model: any) {
        return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
            map((response) => {
                const user = response;
                if (user) {
                    this.setCurrentUser(user);
                }
            })
        );
    }

    register(model: any) {
        // before 2020, return this.http.post(this.baseUrl + 'register', user).
        return this.http.post<User>(this.baseUrl + 'account/register', model).pipe(
            map((response) => {
                const user = response;
                if (user) {
                    this.setCurrentUser(user);
                }
            })
        );
    } */

    set2WayCheck(numberToCheck: string) {
        this.current2WayCheckSource.next(numberToCheck);
    }

    get2WayCheck() {
        return this.current2WayCheckSource.getValue();
    }
}
