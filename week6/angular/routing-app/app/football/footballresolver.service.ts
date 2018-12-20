import { Injectable } from '@angular/core';
import { FootballService } from './football.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
interface player{
  id:number,
  name:string,
  image:string
}
@Injectable({
  providedIn: 'root'
})
export class FootballresolverService implements Resolve<player>{

  constructor(private service:FootballService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<player> | Promise<player> | player {
    return this.service.getplayer(+route.params['id']);
  }
}
