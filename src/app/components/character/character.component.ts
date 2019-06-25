import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwService } from 'app/services/sw.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private swService: SwService,
  ) {
    const { episodeId } = this.activatedRoute.snapshot.params;

    this.swService.getCharacters(episodeId)
      .subscribe(val => console.log(val));
  }

  ngOnInit() {
  }

}
