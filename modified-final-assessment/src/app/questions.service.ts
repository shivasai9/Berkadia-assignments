import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  correctanswers;
  totalquestions;
  constructor(private http: HttpClient) { }

  sendAndReceiveCorrectAnswers(number, totalq) {
    this.correctanswers = number;
    this.totalquestions = totalq;
  }
  getquestions() {
    return this.http.get('http://api.myjson.com/bins/gij7c');
  }
}
