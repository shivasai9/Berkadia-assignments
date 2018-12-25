import { Component, OnInit, Input } from '@angular/core';
import { AirqualityService } from '../airquality.service';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-airdata',
  templateUrl: './airdata.component.html',
  styleUrls: ['./airdata.component.css']
})
export class AirdataComponent implements OnInit {
  ngOnInit() {
  }
response:any;
percentage;
val;
info;
apl;
cautions;
message:string;
color='success';
  constructor(private service:AirqualityService,private config: NgbProgressbarConfig,data:AirqualityService) {
    data.currentMessage.subscribe(message => this.message = message)
    this.service.getdata(this.message)
    .subscribe((res)=>{
    this.response=res;
   this.val=this.response.data.aqi;
    console.log(this.response);
    this.function1();
    })
    
    config.max = 310;
    config.striped = true;
    config.animated = true;
    config.height = '40px';
    config.showValue=true;
   }
   function1(){
     if(this.val<=50){
     this.color='success';
      this.getdata(0);
     }
     if(this.val>50 && this.val<=100){
     this.color='info';
     this.getdata(1);
     }
     if(this.val>100 && this.val<=150){
     this.color='primary';
     this.getdata(2);
     }
     if(this.val>150 && this.val<=200){
     this.color='warning';
     this.getdata(3);
     }
     if(this.val>200 && this.val<=300){
     this.color='danger';
     this.getdata(4);
     }
     if(this.val>300){
     this.color='secondary';
     this.getdata(5);
     }
   }
   getdata(i){
    this.info=this.service.info[i];
    this.apl=this.service.apl[i];
    this.cautions=this.service.cautions[i];
   }
   function2(x){
     console.log(x);
   }
  }
  
    
  

