import { Component, OnInit } from '@angular/core';
import { BookdataService } from './../bookdata.service';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  fullbookdata;
  rating = 1;
  totalrating;
  finalresult;
  color = ['danger', 'warning', 'secondary', 'primary', 'success'];
  constructor(private bookDataService: BookdataService, private config: NgbProgressbarConfig) {
    this.bookDataService.getFullDataById()
      .subscribe((fulldata) => {
        this.fullbookdata = fulldata;
        console.log(fulldata);
        console.log(this.fullbookdata);
      })
    config.max = 100; //maximum rating is 100 just an approximation
    config.striped = true;
    config.animated = true;
    config.height = '20px';
    config.showValue = false;
  }
  ngOnInit() {
  }
  increment() {
    if (this.rating < 5)
      this.rating += 1;
  }
  decrement() {
    if (this.rating > 1)
      this.rating -= 1;
  }

  updateInDataBase() {
    if (this.rating == 1) {
      this.totalrating = parseInt(this.fullbookdata[0].onestar) + 1;
    }
    if (this.rating == 2) {
      this.totalrating = parseInt(this.fullbookdata[0].twostar) + 1;
    }
    if (this.rating == 3) {
      this.totalrating = parseInt(this.fullbookdata[0].threestar) + 1;
    }
    if (this.rating == 4) {
      this.totalrating = parseInt(this.fullbookdata[0].fourstar) + 1;
    }
    if (this.rating == 5) {
      this.totalrating = parseInt(this.fullbookdata[0].fivestar) + 1;
    }
    this.bookDataService.updateRating(this.rating, this.fullbookdata[0].id, this.totalrating)
      .subscribe((res) => {
        this.finalresult = res;
      })

  }
}
