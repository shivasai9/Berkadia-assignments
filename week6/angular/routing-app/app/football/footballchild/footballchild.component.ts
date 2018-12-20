import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Data } from '@angular/router';

@Component({
  selector: 'app-footballchild',
  templateUrl: './footballchild.component.html',
  styleUrls: ['./footballchild.component.css']
})
export class FootballchildComponent implements OnInit {
  player:{id:number,name:string,image:string};
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.data
    .subscribe((data: Data)=>{
      this.player=data['data'];
    })
  }

}
