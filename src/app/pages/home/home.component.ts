import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../../services/movieservice.service';


@Component({
 selector: 'app-home',
 templateUrl: './home.component.html',
 styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies;

 constructor(private movieService: MovieserviceService) {}

 ngOnInit() {
   this.movieService.movieTheaters().subscribe( (data: {pages: number, total_result: number, total_page: number, results: any[]}) => {
     this.movies = data.results;
    });
 }

 message(event){
 console.log(event);
}
}