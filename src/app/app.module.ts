import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CharacterComponent } from './components/character/character.component';
import { SearchComponent } from './components/search/search.component';
import { SwService } from './services/sw.service';

const appRoutes: Routes  = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'character/:nick', component: CharacterComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    SwService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
