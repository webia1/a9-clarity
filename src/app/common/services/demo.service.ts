import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  constructor(private http: HttpClient) {}

  getWhatEver(): Observable<any> {
    return this.http.get('http://demo5829807.mockable.io/');
  }
}
