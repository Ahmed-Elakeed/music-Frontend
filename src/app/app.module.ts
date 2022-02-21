import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GenreComponent } from './component/genre/genre.component';
import { ArtistComponent } from './component/artist/artist.component';
import { AlbumComponent } from './component/album/album.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { ArtistFormComponent } from './component/artist/artist-form/artist-form.component';
import { GenreFormComponent } from './component/genre/genre-form/genre-form.component';
import { AlbumFormComponent } from './component/album/album-form/album-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GenreComponent,
    ArtistComponent,
    AlbumComponent,
    NavbarComponent,
    ArtistFormComponent,
    GenreFormComponent,
    AlbumFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
