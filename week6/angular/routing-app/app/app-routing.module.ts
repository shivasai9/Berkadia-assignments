import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CricketComponent } from './cricket/cricket.component';
import { FootballComponent } from './football/football.component';
import { ChessComponent } from './chess/chess.component';
import { CricketchildComponent } from './cricket/cricketchild/cricketchild.component';
import { CricketResolverService } from './cricket/cricketchild/cricket-resolver.service';
import { Guard1Service } from './guard1.service';
import { FootballresolverService } from './football/footballresolver.service';
import { FootballchildComponent } from './football/footballchild/footballchild.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'cricket', component:CricketComponent, children:[
    {path:':id',component:CricketchildComponent,canActivate:[Guard1Service],resolve:{data:CricketResolverService}}
   ]},
  {path:'football', component:FootballComponent,children:[
    {path:':id',resolve:{data:FootballresolverService},canActivate:[Guard1Service],component:FootballchildComponent}
  ]},
  {path:'chess', component:ChessComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
exports: [RouterModule]
})
export class AppRoutingModule { }
