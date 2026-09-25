import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IInsurer } from '../models/insurer';
import { IOffers } from '../models/offers';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class InsurerService {
    constructor(private http: HttpClient) {}

    async getAll(jsonChosen: string): Promise<IInsurer[]> {
        const response = await firstValueFrom(this.http.get<any>('insurances/data/' + jsonChosen + '.json'));
        return response.data as IInsurer[];
    }

    async getOffers(jsonChosen: string): Promise<IOffers[]> {
        const response = await firstValueFrom(this.http.get<any>('insurances/data/' + jsonChosen + '-offers.json'));
        return response.data as IOffers[];
    }
}
