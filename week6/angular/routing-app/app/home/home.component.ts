import { Component, OnInit } from '@angular/core';
import { Guard2Service } from './../guard2.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
val:boolean;
  constructor(private service:Guard2Service) {
    this.val=service.loggedIn;
   }

  ngOnInit() {
  }
login(){
  this.val=this.service.login();
}
logout(){
  this.val=this.service.logout();
}
}
