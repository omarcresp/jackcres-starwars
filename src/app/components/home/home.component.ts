import { Component, OnInit } from '@angular/core';
import { SwService } from 'app/services/sw.service';
import { Film } from 'app/interfaces/films';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  films: Film[];

  constructor(private swService: SwService) {
    this.swService.getFilms()
      .subscribe(
        ({ results }) => this.films = results,
        err => console.error(`Error: ${err}`),
        () => console.log('completed')
      );
  }

  ngOnInit() {
  }

}
