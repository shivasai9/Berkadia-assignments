import { Component, OnInit } from '@angular/core';
import { FootballService } from './football.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.css']
})
export class FootballComponent implements OnInit {
players;
  constructor(private service:FootballService, private router:Router) { }

  ngOnInit() {
 this.players=this.service.getPlayers();
  }
  gohome(){
    this.router.navigate(["/home"]);
   }
}
