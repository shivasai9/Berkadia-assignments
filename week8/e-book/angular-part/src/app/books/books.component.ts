import { Component, OnInit } from '@angular/core';
import { BookdataService } from './../bookdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  bookdata;
  constructor(private bookdataservice: BookdataService, private router: Router) { }
  books = [0, 1, 2];
  books1 = [3, 4, 5];
  ngOnInit() {
    this.bookdataservice.getBookData()
      .subscribe((res) => {
        console.log(res);
        this.bookdata = res;
        console.log(this.bookdata[0].id);
      })
  }
  sendId(id) {
    console.log(id);
    this.bookdataservice.sendId(id);
    setTimeout(() => {
      this.router.navigate(['details'])
    }, 2000)
  }

}

