import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwService } from 'app/services/sw.service';
import { Characters } from 'app/interfaces/characters';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  characters: Characters[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private swService: SwService,
  ) {
    const { episodeId } = this.activatedRoute.snapshot.params;

    this.swService.getCharacters(episodeId)
      .subscribe(
        val => val.subscribe(responses => this.characters = responses)
      );
  }

  ngOnInit() {
  }

}
