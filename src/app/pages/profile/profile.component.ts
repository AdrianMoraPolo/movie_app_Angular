import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieserviceService } from '../../services/movieservice.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  movie;

  constructor(
  private router: ActivatedRoute,
  private movieService: MovieserviceService
  ) {}

  ngOnInit() {
    this.router.params.subscribe( params => {
      console.log('Get movie id', params);

      //get movie data from movie movieservice

      this.movieService.movie(params.id).subscribe( data => {
        console.log('Obtenemos detalle pelicula', data);

        this.movie = data;
      }) 
    });
  }

}
