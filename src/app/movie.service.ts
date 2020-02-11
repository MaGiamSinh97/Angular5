import { Injectable } from '@angular/core';
import { fakeMovies } from './fakemovies';
import { Movie } from '../app/models/movie'
import { Observable } from 'rxjs';
import { of } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  getMovies():Observable<Movie[]>{
    return of(fakeMovies);
  }
  constructor() { }
}
