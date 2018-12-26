import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AirqualityService {
  private cityname1 = new BehaviorSubject('sydney');
  currentcity = this.cityname1.asObservable();
  constructor(private http: HttpClient) {
  }
  getdata(name) {
    return this.http.get('https://api.waqi.info/feed/' + name + '/?token=b9e5f1862d4b8fe19b6257e099fe578fd006cd1b');
  }
  changecity(city: string) {
    this.cityname1.next(city);
  }
}
