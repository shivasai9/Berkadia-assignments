import { Component, OnInit } from '@angular/core';
import { GuardService } from './../guard.service';
import { DataService } from './../data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  name;
  password;
  booldata;
  constructor(private guardService: GuardService, private dataService: DataService) { }

  ngOnInit() {
  }

  signIn() {
    this.dataService.getLoginDetails(this.password, this.name);
    setTimeout(() => {
      this.booldata = this.dataService.data1;
      if (this.booldata == true) {
        this.guardService.login(this.booldata);
        alert('successfully signedin.....');
      }

      if (this.booldata == false) {
        this.guardService.logout(this.booldata);
        alert('Incorrect password or name.....');
      }
    }, 2000)
  }
}
