import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild
} from '@angular/router';
import { Guard2Service } from './guard2.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class Guard1Service implements CanActivate {

  constructor(private Service:Guard2Service , private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
return this.Service.isAuthenticated()
.then(
(authenticated: boolean) => {
if (authenticated) {
  return true;
} else {
  this.router.navigate(['/']);
  alert("please login to get the details...");
}
}
);
}
}
