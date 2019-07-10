import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private movieService: MovieserviceService) {}

  ngOnInit() {
    this.movieService.movieTheaters().subscribe( data => console.log(data))
  }

}


