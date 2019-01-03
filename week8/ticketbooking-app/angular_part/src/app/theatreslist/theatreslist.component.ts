import { Component, OnInit } from '@angular/core';
import { MoviedataService } from '../moviedata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-theatreslist',
  templateUrl: './theatreslist.component.html',
  styleUrls: ['./theatreslist.component.css']
})
export class TheatreslistComponent implements OnInit {
  movielist;
  theatrename;
  shows = false;
  showsdata;

  constructor(private moviedataservice: MoviedataService, private router: Router) { }
  ngOnInit() {
    this.moviedataservice.updatedmovielist
      .subscribe(res => {
        this.movielist = res;
        console.log(res);
      });
  }
  getshows() {
    this.moviedataservice.getshowsbytheatrename(this.theatrename)
      .subscribe((shows) => {
        this.showsdata = shows;
        this.shows = true;
      })
  }
  getseats(theatrename) {
    this.moviedataservice.getshowsbytheatrename(theatrename)
      .subscribe((seats) => {
        this.moviedataservice.showsdata.next(seats);
      })
    this.router.navigate(['/ticketbooking']);
  }
}
