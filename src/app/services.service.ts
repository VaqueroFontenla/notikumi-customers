import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url = '../../assets/customers.json';
  constructor(private http: HttpClient) {
   }
  getData(){
    return this.http.get(this.url);
  }
}
