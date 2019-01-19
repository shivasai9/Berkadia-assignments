import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name;
  password;
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }
  post() {
    this.dataService.postPassWordData(this.name, this.password)
      .subscribe((response) => {
        console.log(response);
        if (response) {
          alert('Successfully signedup....')
        }
      })
  }
}
