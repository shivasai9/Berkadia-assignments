import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  correctquestions = [];
  percentage;
  correctquestionsnumber;
  questions;
  color: boolean = true;
  val;
  disp = false;
  wrongquestionsnumber;
  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.correctquestions = this.dataService.correctQuestions;
    this.correctquestionsnumber = this.correctquestions.length;
    this.wrongquestionsnumber = 10 - this.correctquestionsnumber;
    this.percentage = ((this.correctquestions.length) / 10) * 100;
    this.dataService.getQuestionData()
      .subscribe((response) => {
        this.questions = response;
      })
  }

  sendquestion(question) {
    this.disp = true;
    for (let i; i < this.correctquestions.length; i++) {
      if (question == this.correctquestions[i]) {
        this.color = true;
      }
      else {
        this.color = false;
      }
    }
    setTimeout(() => {
      this.val = true;
    }, 2000)

  }
}
