import { Component, OnInit } from '@angular/core';
import { MoviedataService } from '../moviedata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pin;
  moviename=[];
  movielist;
  constructor(private moviedataservice: MoviedataService) { }

  ngOnInit() {this.moviedataservice.updatedmovielist
    .subscribe(res=>this.movielist=res); }

  loadtheatrenamebypin() {
    this.moviedataservice.getbypincode(this.pin)
    .subscribe((res)=>{
      this.moviedataservice.update(res);
     })
  }

  loadtheatrenamebymovie() {
    this.moviedataservice.getbymoviename(this.moviename)
    .subscribe((res)=>{
       this.moviedataservice.update(res);
     })
  }
   
}
