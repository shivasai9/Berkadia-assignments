import { Injectable } from '@angular/core';

@Injectable()
export class FootballService {
players=[
    {id:1,name:'Messi',image:'assets/images/football/messi.jpg'},
    {id:2,name:'Neymer',image:'assets/images/football/neymar.jpg'},
    {id:3,name:'Paulpogba',image:'assets/images/football/paulpogba.jpg'},
    {id:4,name:'Ronaldo',image:'assets/images/football/ronaldo.jpg'},
    {id:5,name:'Sunilchhetri',image:'assets/images/football/sunichhetri.jpg'}]

    getPlayers(){
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



