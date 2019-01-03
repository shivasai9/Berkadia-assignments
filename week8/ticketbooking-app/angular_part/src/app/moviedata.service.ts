import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable()
export class MoviedataService {
  private movielist = new BehaviorSubject('');
  updatedmovielist = this.movielist.asObservable();

  showsdata = new Subject;

  constructor(private http: HttpClient) { }

  getbypincode(pin) {
    console.log(pin);
    return this.http.get('http://localhost:3000/theatrename/pincode/' + pin);
  }

  getbymoviename(moviename) {
    console.log(moviename);
    return this.http.get('http://localhost:3000/theatrename/' + moviename);
  }

  getshowsbytheatrename(theatrename) {
    return this.http.get('http://localhost:3000/shows/' + theatrename);
  }

  booktickets(theatrename, numberoftickets) {
    console.log(theatrename);
    console.log(numberoftickets);
    return this.http.get('http://localhost:3000/booktickets/' + theatrename + '/' + numberoftickets);

  }
  getmovienamebytname(theatrename) {
    return this.http.get('http://localhost:3000/moviename/' + theatrename);
  }
  update(x) {
    this.movielist.next(x);
  }
}
