import { Component } from '@angular/core';
import { ExampleService } from './example.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value='home';
  data=[];
  condition=false;
  condition1=true;
  constructor(serviceobj:ExampleService){
      
    this.data=serviceobj.getdata();
  }
  click(){
    this.condition=true;
    this.condition1=false;
  }
}
