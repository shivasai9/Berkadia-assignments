import { Component } from '@angular/core';
//import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students=["shivasai9","sharathchandra717","anandreddysripathi","kalyan555","hareeshdevulapalli","yshashankreddy","rachanagangireddy","venkatnaveenm","praneethth","vamshikapippadapally","saichaitanyareddy","nerellarajeshwari","pssttanusha","sowmyasudhireddy","sravan199","jinkachandu9","jakkarohith","vaishnavithamshetty","vyshnavikomaravelli","shivasai15"]
  val;
  response;
  u;
  i1;
  constructor( private http:HttpClient,private service:ApiService){
  }
search(){
    for(var i=0;i<20;i++){
      if((this.val)-1==i){
        this.fetchapi(this.students[i]);
        this.i1=i;
        break;
  }
   }
   if((this.i1)+1!=this.val){
   this.fetchapi(this.val);
   console.log(this.i1);
   } 
}
fetchapi(name){
  this.service.getdata(name)
  .subscribe((res)=>{
     this.response=res;
     console.log(this.response); 
});
    //this.u=this.response.login;
    

}
}