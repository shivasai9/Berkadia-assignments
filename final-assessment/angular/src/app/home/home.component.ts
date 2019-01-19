import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  value = 0;
  op1;
  op2;
  op3;
  op4;
  selectedOption;
  correctQuestions = [];
  finalquestion = true;
  isCorrect;
  status = false;
  constructor(private dataService: DataService, private router: Router) { }
  questions;
  ngOnInit() {
    this.dataService.getQuestionData()
      .subscribe((questions) => {
        this.questions = questions;
        console.log(questions);
      })
  }
  nextQuestion() {
    this.value += 1;
    console.log(this.op1);
    if (this.value == 9) {
      this.enableSubmitButton();
    }
    this.status = false;
    this.op1=false;
    this.op2=false;
    this.op3=false;
    this.op4=false;
  }
  previousQuestion() {
    this.value -= 1;
  }
  optionCheck() {
    if (this.op1) {
      this.selectedOption = 1;
      console.log(this.selectedOption);
    }
    if (this.op2) {
      this.selectedOption = 2;
      console.log(this.selectedOption);
    }
    if (this.op3) {
      this.selectedOption = 3;
      console.log(this.selectedOption);
    }
    if (this.op4) {
      this.selectedOption = 4;
      console.log(this.selectedOption);
    }
  }
  submit() {
    this.optionCheck();
    setTimeout(() => {
      if (this.questions[this.value].correctop == this.selectedOption) {
        console.log('correct')
        this.correctQuestions.push(this.value)
        this.isCorrect = true;
        this.status = true;
        console.log(this.correctQuestions);
      }
      if (this.questions[this.value].correctop != this.selectedOption) {
        console.log('incorrect')
        this.isCorrect = false;
        this.status = true;
      }
    }, 1000)
  }
  enableSubmitButton() {
    this.finalquestion = false;
  }
  submitQuiz() {
    this.dataService.sendCorrectQuestions(this.correctQuestions);
    setTimeout(() => {
      this.router.navigate(['/summary']);
    }, 2000)
  }
}
