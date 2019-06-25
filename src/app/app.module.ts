import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CharacterComponent } from './components/character/character.component';
import { SearchComponent } from './components/search/search.component';
import { SwService } from './services/sw.service';
import { CrawlComponent } from './components/crawl/crawl.component';

const appRoutes: Routes  = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'characters/:episodeId', component: CharacterComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterComponent,
    SearchComponent,
    CrawlComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    Ng2SmartTableModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    SwService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
