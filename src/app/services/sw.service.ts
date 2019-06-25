import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/forkJoin';
import { Films, Film } from 'app/interfaces/films';
import { Observable } from 'rxjs/Observable';

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

  getFilmByEpisode(episodeId): Observable<Film> {
    return this.$http.get(`${this.swUrl}/films/${episodeId}/?format=json`)
      .map(response => response.json());
  }

  getCharactersUrl(episodeId) {
    return this.getFilmByEpisode(episodeId)
      .map(film => film.characters);
  }

  getCharacters(episodeId) {
    return this.getCharactersUrl(episodeId)
      .map(
        this.resolveCharacter
      )
  }

  resolveCharacter(characters) {
    const gets: Observable<any>[] = [];
    const self = this;

    characters.forEach(url => {
      const get = self.$http.get(`${url}/?format=json`);

      gets.push(get);
    })

    return Observable.forkJoin(gets)
  }
}
