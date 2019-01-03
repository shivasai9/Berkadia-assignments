import { Component, OnInit } from '@angular/core';
import { MoviedataService } from './../moviedata.service';

@Component({
  selector: 'app-ticketbooking',
  templateUrl: './ticketbooking.component.html',
  styleUrls: ['./ticketbooking.component.css']
})
export class TicketbookingComponent implements OnInit {
  seats;
  seatscount = false;
  fiveseats = [1, 2, 3, 4, 5];
  const = 0;
  morethan6 = false;
  finaldatadisplay = false;
  finaldata;
  zeroselected = false;
  isdisabled = false;
  finalmoviename;
  constructor(private moviedataservice: MoviedataService) { }
  ngOnInit() {
    this.moviedataservice.showsdata
      .subscribe((res) => {
        this.seats = res;
        this.seatscount = true;
      })
  }
  log(val) {
    console.log(val.value);
    if (val.value)
      this.const += 1;
    if (!val.value)
      this.const -= 1;
  }
  confirmbooking() {
    if (this.const > 6) {
      this.morethan6 = true;
      this.zeroselected = false;
    }
    else if (this.const == 0) {
      this.zeroselected = true;
      this.morethan6 = false;
    }
    else {
      this.morethan6 = false;
      this.zeroselected = false;
      this.moviedataservice.booktickets(this.seats[0].theatrename, this.const)
        .subscribe((res) => {
          console.log(res);
          this.finaldata = res;
          console.log(this.finaldata);
          this.finaldatadisplay = true;
          this.isdisabled = true;
        })
      this.moviedataservice.getmovienamebytname(this.seats[0].theatrename)
        .subscribe((res) => {
          this.finalmoviename = res[0].moviename;
        })
    }
  }
}



