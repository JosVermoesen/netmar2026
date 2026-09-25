import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Image } from '../models/image';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  getImages(photoType: string) {
    return this.http
      .get<any>('assets/images/data/' + photoType + '.json')
      .toPromise()
      .then((res) => res.data as Image[])
      .then((data) => data);
  }
}
