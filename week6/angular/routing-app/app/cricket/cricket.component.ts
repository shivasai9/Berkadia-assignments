import { Component, OnInit } from '@angular/core';
import { CricketService } from './cricket.service';
import { Data, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.css']
})
export class CricketComponent implements OnInit {
  players:any;
  
  constructor(private service:CricketService,private router:Router) { }
       
  ngOnInit() {
    this.players=this.service.getplayers();
  }
  gohome(){
   this.router.navigateByUrl("/home");
  }

}
