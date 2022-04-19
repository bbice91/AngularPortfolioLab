import { Component, OnInit } from '@angular/core';

import { cinema } from '../cinema';
import { CinemaService } from '../cinema.service';

@Component({
  selector: 'app-movies',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {
  movies: cinema[] = [];

  constructor(private cinemaService: CinemaService) { }

  ngOnInit(): void {
    this.getmovies();
  }

  getmovies(): void {
    this.cinemaService.getmovies()
    .subscribe(movies => this.movies = movies);
  }
}
