import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CricketService {
  players=[
    {id:1,name:'virat kohli',image:'assets/images/cricket/virat.jpg'},
    {id:2,name:'Rohit Sharma',image:'assets/images/cricket/rohitsharma.jpg'},
    {id:3,name:'Ab Devilliers',image:'assets/images/cricket/devillers.jpg'},
    {id:4,name:'David Warner',image:'assets/images/cricket/davidwarner.jpg'},
    {id:5,name:'Kane Williamson',image:'assets/images/cricket/kanewilliamson.jpg'},
  ]
  getplayers(){
    return this.players;
  }
  getplayer(id:number){
    const player = this.players.find(
      (s) => {
        return s.id === id;
      }
    );
    return player;
  }
}
