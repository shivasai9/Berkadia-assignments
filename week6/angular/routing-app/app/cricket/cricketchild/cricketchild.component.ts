import { Component, OnInit } from '@angular/core';
import { Data, ActivatedRoute, Router } from '@angular/router';
import { CricketService } from '../cricket.service';

@Component({
  selector: 'app-cricketchild',
  templateUrl: './cricketchild.component.html',
  styleUrls: ['./cricketchild.component.css']
})
export class CricketchildComponent implements OnInit {
player:{id:number,name:string,image:string};

  constructor(private Service: CricketService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.player = data['data'];
        }
      );
    
      
  }
}
