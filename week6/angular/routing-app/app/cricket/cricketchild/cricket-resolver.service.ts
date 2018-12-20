import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CricketService } from '../cricket.service';
import { Observable } from 'rxjs/internal/Observable';


interface player {
  id: number;
  name: string;
  image:string;
}

@Injectable()
export class CricketResolverService  implements Resolve<player> {
  constructor(private Service:CricketService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<player> | Promise<player> | player {
    return this.Service.getplayer(+route.params['id']);
  }
}