import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/from';
import { Films, Film } from 'app/interfaces/films';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SwService {

  constructor(private $http: Http) { }

  private get swUrl () {
    return 'https://swapi.dev/api';
  }

  getFilms (): Observable<Film[]> {
    const episode = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];

    return this.$http.get(`${this.swUrl}/films/?format=json`)
      .map(response => response.json())
      .map(response => response.results.map(film => {
        film.showCrawl = false
        film.episode = episode[film.episode_id - 1]

        film.opening_crawl = JSON.stringify(film.opening_crawl)
        film.opening_crawl = film.opening_crawl.split('\\r\\n\\r\\n')
        if (!film.opening_crawl[2]) {
          film.opening_crawl = film.opening_crawl[0].split('\\r\\n \\r\\n');
        }
        film.opening_crawl = film.opening_crawl.map(item => {
          const newitem = item.split('\\r\\n');

          return newitem.join(' ')
        })

        return film
      }));
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
        characters => {
          const gets: Observable<Response>[] = [];

          characters.forEach(url => {
            const get = this.$http.get(`${url}?format=json`);

            gets.push(get);
          })

          return Observable.forkJoin(gets)
        }
      )
      .map(val => val.map(responses => responses.map(response => response.json())));
  }
}
