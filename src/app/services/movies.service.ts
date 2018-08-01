import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  API_ENDPOINT = 'http://localhost:8000/api';

  constructor() {}
}
