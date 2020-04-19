import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwService } from 'app/services/sw.service';
import { Characters } from 'app/interfaces/characters';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: []
})
export class CharacterComponent implements OnInit {
  characters: Characters[];
  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    attr: {
      class: 'characters-table'
    },
    hideSubHeader: true,
    columns: {
      name: {
        title: 'Name'
      },
      hair_color: {
        title: 'Hair color'
      },
      gender: {
        title: 'Gender'
      }
    }
  };

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
