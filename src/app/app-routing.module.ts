import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ArtistComponent} from "./component/artist/artist.component";
import {GenreComponent} from "./component/genre/genre.component";
import {AlbumComponent} from "./component/album/album.component";
import {ArtistFormComponent} from "./component/artist/artist-form/artist-form.component";
import {GenreFormComponent} from "./component/genre/genre-form/genre-form.component";
import {AlbumFormComponent} from "./component/album/album-form/album-form.component";
import {PageNotFoundComponent} from "./component/page-not-found/page-not-found.component";
import {SearchComponent} from "./component/search/search.component";

const routes: Routes = [
  {
    path: 'artists',
    component: ArtistComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: '',
    redirectTo: '/albums',
    pathMatch: 'full'
  },
  {
    path: 'genres',
    component: GenreComponent
  },
  {
    path: 'albums',
    component: AlbumComponent
  },
  {
    path: 'artistForm',
    component: ArtistFormComponent
  },
  {
    path: 'artistForm/:id',
    component: ArtistFormComponent
  }, {
    path: 'genreForm',
    component: GenreFormComponent
  },
  {
    path:'genreForm/:id',
    component:GenreFormComponent
  },
  {
    path:'albumForm',
    component:AlbumFormComponent
  },
  {
    path:'albumForm/:id',
    component:AlbumFormComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
