import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CricketComponent } from './cricket/cricket.component';
import { FootballComponent } from './football/football.component';
import { ChessComponent } from './chess/chess.component';
import { CricketchildComponent } from './cricket/cricketchild/cricketchild.component';
import { CricketResolverService } from './cricket/cricketchild/cricket-resolver.service';
import { CricketService } from './cricket/cricket.service';
import { FootballchildComponent } from './football/footballchild/footballchild.component';
import { Guard2Service } from './guard2.service';
import { Guard1Service } from './guard1.service';
import { FootballresolverService } from './football/footballresolver.service';
import { FootballService } from './football/football.service';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CricketComponent,
    FootballComponent,
    ChessComponent,
    CricketchildComponent,
    FootballchildComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CricketResolverService,CricketService,Guard1Service,Guard2Service,
    FootballresolverService,FootballService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
