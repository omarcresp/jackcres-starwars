import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-crawl',
  templateUrl: './crawl.component.html',
  styleUrls: ['./crawl.component.css']
})
export class CrawlComponent implements OnInit {
  @Input() crawl: string;
  @Input() title: string;
  @Input() episode: string;

  constructor() { }

  ngOnInit() {
  }

  end() {
    alert('Holaa!');
  }
}
