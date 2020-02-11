import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { fakeMovies } from '../fakemovies';
import { MovieService } from '../movie.service'
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  constructor(private moviceService: MovieService) {

  }
  getMovieFromService(): void {
    this.moviceService.getMovies().subscribe((updatedMovies) => {
      this.movies = updatedMovies;
      console.log(`this.movies= ${JSON.stringify(this.movies)}`);
    })
  }
  ngOnInit() {
    this.getMovieFromService();
  }
  selectedMovie: Movie;
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }
}
