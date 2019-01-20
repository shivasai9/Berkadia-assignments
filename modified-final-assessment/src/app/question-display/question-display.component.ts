import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './../questions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-display',
  templateUrl: './question-display.component.html',
  styleUrls: ['./question-display.component.css']
})
export class QuestionDisplayComponent implements OnInit {

  constructor(private questionsService: QuestionsService, private router: Router) { }


  questions;
  currentQuestion = 0;
  options = [];
  correctanswers = 0;
  val = 0;
  correct = false;
  wrong = false;
  clickedoption;
  isdisabled = true;
  totalquestions;
  randomquestions;
  randomoptions;

  ngOnInit() {
    this.questionsService.getquestions()
      .subscribe((questions) => {
        console.log(questions);
        this.questions = questions;
        this.totalquestions = this.questions.results.length;
        this.randomquestions = this.shuffle(this.questions.results);
      })
  }

  nextQuestion() {
    this.currentQuestion += 1;
    this.val = 0;
    if (this.currentQuestion > this.totalquestions - 2) {
      this.isdisabled = false;
    }

    this.correct = false;
    this.wrong = false;
  }

  checkOption(selectedOption) {

    if (selectedOption.value == true) {
      this.clickedoption = selectedOption.name;
    }

  }

  sendqno(qno) {
    if (qno == this.currentQuestion) {
      this.options = this.questions.results[qno].incorrect_answers;
      if (this.val == 0) {
        this.options.push(this.questions.results[qno].correct_answer);
        this.val = 1;
        this.randomoptions = this.shuffle(this.options);
      }
      return true;
    }
  }

  submit(qno) {
    console.log(qno);
    console.log(this.clickedoption)
    if (this.clickedoption == this.questions.results[qno].correct_answer) {
      this.correct = true;
      this.wrong = false;
      this.correctanswers += 1;
    }
    else {
      this.correct = false;
      this.wrong = true;
    }
  }

  submitQuiz() {
    this.questionsService.sendAndReceiveCorrectAnswers(this.correctanswers, this.totalquestions);
    setTimeout(() => {
      this.router.navigate(['/summary']);
    }, 2000)

  }
  
  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
}

