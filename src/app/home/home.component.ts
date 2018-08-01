import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../services/movies.service';
import {Movie} from '../interfaces/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movie[];
  constructor(private movieService: MoviesService) {
    this.getMovies();
  }
  getMovies() {
  }
  ngOnInit() {
  }
  delete(id) {
    if (confirm('Seguro que deseas eliminar esta película?')) {
      // Eliminar
    }
  }
}
