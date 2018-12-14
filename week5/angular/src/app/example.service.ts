import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  cdata=[
    {name:'virat kohli',age:28,highscore:183,average:53.22,rank:1},
    {name:'Rohit sharma',age:32,highscore:256,average:30.51,rank:6},
    {name:'Dhawan',age:33,highscore:152,average:26.33,rank:12},
    {name:'Ms.Dhoni',age:36,highscore:183,average:53.22,rank:11},
    {name:'Murali vijay',age:34,highscore:106,average:26.59,rank:56},
    {name:'pruthvi shaw',age:20,highscore:null,average:null,rank:null},
    {name:'rahul',age:28,highscore:126,average:45.98,rank:26},
    {name:'AB de villiers',age:36,highscore:186,average:50.22,rank:3},
  ];
  getdata(){
    return this.cdata;
  }

}
