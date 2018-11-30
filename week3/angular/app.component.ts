import { Component, OnInit } from '@angular/core';
import { GalleryService } from './gallery.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private galleryData;
  private fullMovieDetials;
  n:number;
  res1:number=-1;
  count=[ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
  constructor(private galleryService: GalleryService) { }
  ngOnInit() {
    
    this.galleryService.giveImageData().subscribe((res) => {
     
      this.galleryData = this.addBaseURL(res['results']);
      console.log(this.galleryData);
      console.log(this.res1);
    });
  }
  search(){
  console.log(this.res1);
  this.res1=this.n;
  }
  

  addBaseURL(response) {
   
    if (Array.isArray(response)) {
      response.forEach(element => {
        if (element.backdrop_path) {
          element.backdrop_path = 'http://image.tmdb.org/t/p/w300_and_h450_bestv2/' + element.backdrop_path;

        } else {
          element.backdrop_path = 'http://image.tmdb.org/t/p/w300_and_h450_bestv2/' + '/xgbeBCjmFpRYHDF7tQ7U98EREWp.jpg';
        }
      });
    } else {
      response.backdrop_path = 'http://image.tmdb.org/t/p/w1280/' + response.backdrop_path;

    }

    return response;
  }

}


