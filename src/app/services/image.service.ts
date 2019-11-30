// import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  public getListImages(collection, date): Observable<any> {
    const { day, month, year } = date;
    return this.http.get(`${environment.api}/api/${collection}/date/${year}-${month}-${day}`);
  }

}
