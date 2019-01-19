import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor() { }

  islogged = true;
  isAuth() {
    return this.islogged;
  }

  login(val: boolean) {
    this.islogged = val;
  }

  logout(val: boolean) {
    this.islogged = val;
  }
}

