import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  citem:string;
  items=["item1","item2","item3","item4","item5","item6","item7","item8"]

  function(input:string){
    this.citem=input;
  }
}
