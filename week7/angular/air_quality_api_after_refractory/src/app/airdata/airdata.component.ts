import { Component, OnInit } from '@angular/core';
import { AirqualityService } from '../airquality.service';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { StaticdataService } from '../staticdata.service';
@Component({
  selector: 'app-airdata',
  templateUrl: './airdata.component.html',
  styleUrls: ['./airdata.component.css']
})
export class AirdataComponent implements OnInit {
  ngOnInit() {
  }
  response;
  val;
  info;
  apl;
  precautions;
  city: string;
  color = 'success';
  constructor(private airqualityservice: AirqualityService,
    private config: NgbProgressbarConfig,
    private staticdataservice: StaticdataService) {
    airqualityservice.currentcity.subscribe(city => this.city = city)
    this.airqualityservice.getdata(this.city)
      .subscribe((res) => {
        this.response = res;
        this.val = this.response.data.aqi;
        this.progressbarcolor();
      })
    config.max = 500; //maximum aqi is 310 just an approximation
    config.striped = true;
    config.animated = true;
    config.height = '40px';
    config.showValue = true;
  }
  progressbarcolor() {
    if (this.val <= 50) {
      this.color = 'success';
      this.getstaticdata(0);
    }
    if (this.val > 50 && this.val <= 100) {
      this.color = 'info';
      this.getstaticdata(1);
    }
    if (this.val > 100 && this.val <= 150) {
      this.color = 'primary';
      this.getstaticdata(2);
    }
    if (this.val > 150 && this.val <= 200) {
      this.color = 'warning';
      this.getstaticdata(3);
    }
    if (this.val > 200 && this.val <= 300) {
      this.color = 'danger';
      this.getstaticdata(4);
    }
    if (this.val > 300) {
      this.color = 'secondary';
      this.getstaticdata(5);
    }
  }
  getstaticdata(i) {
    this.info = this.staticdataservice.info[i];
    this.apl = this.staticdataservice.apl[i];
    this.precautions = this.staticdataservice.precautions[i];
  }
}




