import { Component } from '@angular/core';
import { GuardService } from './guard.service';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn;
  constructor(private guardService:GuardService){}
  signout(){
    this.isLoggedIn=this.guardService.islogged;
    if(this.isLoggedIn){
      this.guardService.logout(false);
      alert('Signedout Successfully.....');
    }
    if(!this.isLoggedIn){
      alert('Please signin.....');
    }
  }

 
}
