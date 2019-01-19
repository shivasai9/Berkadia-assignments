import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  correctQuestions;
  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000';
  data1;
  getLoginDetails(password, name) {
    this.http.get(`${this.url}/get/${password}/${name}`)
      .subscribe((response) => {
        console.log(response);
        this.data1 = response;
      })
  }

  postPassWordData(name, pw) {
    console.log(pw);
    console.log(name);
    return this.http.post(`${this.url}/post`, { name: name, password: pw });
  }

  getQuestionData() {
    return this.http.get(`${this.url}/questions`);
  }
  sendCorrectQuestions(cq) {
    this.correctQuestions = cq;
  }
}
