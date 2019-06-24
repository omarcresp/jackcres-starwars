import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Films } from 'app/interfaces/films';

@Injectable()
export class SwService {

  constructor(private $http: Http) { }

  private get swUrl () {
    return 'https://swapi.co/api';
  }

  getFilms (): Observable<Films> {
    return this.$http.get(`${this.swUrl}/films/?format=json`)
      .map(response => response.json());
  }
}
