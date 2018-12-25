import { Component, OnInit } from '@angular/core';
import { AirqualityService } from '../airquality.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cities1=['paris','beijing','adelaide','melbourne'];
  cities2=['perth','sydney','varanasi','patna'];
  place;
  constructor(private data: AirqualityService) { }
  ngOnInit() {
  }
sendcity(city){
this.place=city;
this.data.changeMessage(city);
}
}
