import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirdataComponent } from './airdata/airdata.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LearnmoreComponent } from './learnmore/learnmore.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'airdata',component:AirdataComponent},
  {path:'image',component:LearnmoreComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
