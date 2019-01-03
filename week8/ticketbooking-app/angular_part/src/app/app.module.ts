import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviedataService } from './moviedata.service';
import { TheatreslistComponent } from './theatreslist/theatreslist.component';
import { TicketbookingComponent } from './ticketbooking/ticketbooking.component';
import { NotfoundComponent } from './notfound/notfound.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TheatreslistComponent,
    TicketbookingComponent,
    NotfoundComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MoviedataService],
  bootstrap: [AppComponent,]
})
export class AppModule { }
