import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { QuestionDisplayComponent } from './question-display/question-display.component';
import { SummaryComponent } from './summary/summary.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionDisplayComponent,
    SummaryComponent,
   
  ],
  imports: [
  
  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
