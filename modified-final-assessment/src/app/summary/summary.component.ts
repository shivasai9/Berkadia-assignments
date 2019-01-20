import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private questionsService: QuestionsService) { }
  correctanswers;
  totalquestions;
  wronganswers;
  percentage;
  ngOnInit() {
    this.correctanswers = this.questionsService.correctanswers;
    this.totalquestions = this.questionsService.totalquestions;
    this.wronganswers = this.totalquestions - this.correctanswers;
    this.percentage = (this.correctanswers / this.totalquestions) * 100;
  }

}
