import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//RxJs
// import { Observable } from 'rxjs';
// import { map } from "rxjs/operators";

//Models





@Injectable()
export class MovieserviceService {
 
  apiUrl = 'https://api.themoviedb.org/3/';
  apiKey = '?api_key=1ea7fb1159d453a78bfc079d161181b5&';

  // Inyección de dependencia
  constructor(private _http: HttpClient) {
    console.log('Connected to API');
  }

  movieTheaters() {
    // We can set a let with actual Date formatted to get the movies of last month
    return this._http
      .get(`${this.apiUrl}discover/movie${this.apiKey}primary_release_date.gte=2019-06-04&primary_release_date.lte=2019-07-04`);
  }

  movie(id: number) {
    return this._http.get(`${this.apiUrl}movie/${id}${this.apiKey}`);
  }
}



