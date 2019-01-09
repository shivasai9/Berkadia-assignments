import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookdataService {
  url = 'http://localhost:3000';
  department='';
  id;
  constructor(private http: HttpClient) { }

   selectDept(dept:string){
    console.log(dept);
    this.department=dept;
  }
  getBookData() {
    console.log(this.department);
    return this.http.get(`${this.url}/books/${this.department}`);
  }
  
  sendId(ID){
    this.id=ID;
    console.log(this.id);
  }

  getFullDataById(){
    console.log(this.id);
   return this.http.get(`${this.url}/fullbookdata/${this.id}`);
  }
  updateRating(starnumber,id,totalrating){
    return this.http.put(`${this.url}/rating/${starnumber}/${id}/${JSON.stringify(totalrating)}`,JSON.stringify(totalrating));
  }
}


