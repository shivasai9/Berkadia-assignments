import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  cartitem=[];
  i1=0;
@Input()item:string[];
@Output()change=new EventEmitter();
@Input()citem:string;


  constructor() { 
  }

  ngOnInit() {
  }
   onclick(i){
     this.change.emit(this.item[i]);
   }
   onclick2(){
    this.cartitem[this.i1]=this.citem;
    this.i1+=1;
   }
   
   onclick3($event,i1){
       for(let i=0;i<this.cartitem.length;i++){
        if(this.cartitem[i]==this.item[i1]){
          this.cartitem.splice(i,1);
          this.i1-=1;
          break;
        
       }
      }
    $event.stopPropagation();
   }
}
