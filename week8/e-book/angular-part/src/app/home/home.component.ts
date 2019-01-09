import { Component, OnInit } from '@angular/core';
import { BookdataService } from './../bookdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private bookdataservice: BookdataService) { }
  ngOnInit() {
  }
  renderEceBooks() {
    this.bookdataservice.selectDept('ece');
  }
  renderCseBooks() {
    this.bookdataservice.selectDept('cse');
  }
  renderEeeBooks() {
    this.bookdataservice.selectDept('eee');
  }
  renderCivilBooks() {
    this.bookdataservice.selectDept('civil');
  }
}
