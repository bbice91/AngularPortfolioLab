import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { cinema } from './cinema';
import { MOVIES } from './mock-movies';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class CinemaService {

  constructor(private messageService: MessageService) { }

  getmovies(): Observable<cinema[]> {
    const movies = of(MOVIES);
    this.messageService.add('cinemaService: fetched movies');
    return movies;
  }

  getcinema(id: number): Observable<cinema> {

    const cinema = MOVIES.find(h => h.id === id)!;
    this.messageService.add(`cinemaService: fetched cinema id=${id}`);
    return of(cinema);
  }
}
