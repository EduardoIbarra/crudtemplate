import { Component, OnInit } from '@angular/core';
import {Movie} from '../interfaces/movie';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  movie: Movie = {
    name: null,
    year: null,
    description: null,
    duration: null,
    genre: null
  };
  id: any;
  editing: boolean = false;
  movies: Movie[];
  constructor(private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.editing = true;
    } else {
      this.editing = false;
    }
  }

  ngOnInit() {
  }

  saveMovie() {
    if (this.editing) {
      // Editar
    } else {
      // Guardar
    }
  }

}
