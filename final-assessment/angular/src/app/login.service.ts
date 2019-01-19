import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { GuardService } from './guard.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanActivate {
  constructor(private router: Router, private guardService: GuardService) { }
  canActivate(): boolean {
    if (this.guardService.isAuth() == true) {
      return true;
    }
    else {
      this.router.navigate(['/signin']);
      alert('please Signin...');
    }
  }
}
