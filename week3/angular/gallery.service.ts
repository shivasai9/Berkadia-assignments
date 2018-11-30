
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GalleryService {
    constructor(private http: HttpClient) { }
    giveImageData() {
        const imagesURL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=aa0456e75f0edfa414c490da77f7ef48&language=en-US&page=1';
        const res = this.http.get(imagesURL);
        return res;
    }

    getDetails(movieId) {
        const link = `https://api.themoviedb.org/3/movie/${movieId}?api_key=aa0456e75f0edfa414c490da77f7ef48&language=en-US`;
        const res = this.http.get(link);
        return res;
    }
}
