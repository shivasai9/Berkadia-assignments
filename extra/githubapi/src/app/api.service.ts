import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
data;
val;
  constructor(private http:HttpClient) { 
  }
  getdata(name){
    return this.http.get("https://api.github.com/users/"+name);
}
}