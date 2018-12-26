import { Component, OnInit } from '@angular/core';
import { AirqualityService } from '../airquality.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  row1cities = ['paris', 'beijing', 'adelaide', 'melbourne'];
  row2cities = ['perth', 'sydney', 'varanasi', 'patna'];
  cityname;
  constructor(private dataservice: AirqualityService) { }
  ngOnInit() {
  }
  sendcity(city) {
    this.dataservice.changecity(city);
  }
  search() {
    this.sendcity(this.cityname);
  }
}
