import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TheatreslistComponent } from './theatreslist/theatreslist.component';
import { TicketbookingComponent } from './ticketbooking/ticketbooking.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'theatrenameslist',component:TheatreslistComponent},
{path:'ticketbooking',component:TicketbookingComponent},
{path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
