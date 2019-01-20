import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionDisplayComponent } from './question-display/question-display.component';
import { SummaryComponent } from './summary/summary.component';


const routes: Routes = [
  {path:'',redirectTo:'/questions',pathMatch:'full'},
  {path:'questions',component:QuestionDisplayComponent},
  {path:'summary',component:SummaryComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
