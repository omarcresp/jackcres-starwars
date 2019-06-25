import { Component, OnInit, trigger, transition, style, animate } from '@angular/core';
import { SwService } from 'app/services/sw.service';
import { Film } from 'app/interfaces/films';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('3s ease-out',
              style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ opacity: 1 }),
            animate('3s ease-in',
              style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class HomeComponent implements OnInit {
  films: Film[];

  constructor(private swService: SwService) {
    this.swService.getFilms()
      .subscribe(
        results => this.films = results,
        err => console.error(`Error: ${err}`),
        () => console.log('completed')
      );
  }

  ngOnInit() {
  }

  async toggleCrawl(id) {
    const film = this.films.find(val => val.episode_id === id);

    film.showCrawl = !film.showCrawl;

    await new Promise(resolve => setTimeout(resolve, 51000));

    film.showCrawl = !film.showCrawl;
  }
}
