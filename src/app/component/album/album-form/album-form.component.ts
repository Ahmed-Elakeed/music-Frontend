import {Component, OnInit} from '@angular/core';
import {Artist} from "../../../model/Artist";
import {Genre} from "../../../model/Genre";
import {ArtistService} from "../../../service/artist.service";
import {GenreService} from "../../../service/genre.service";
import {AlbumService} from "../../../service/album.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Album} from "../../../model/Album";

@Component({
  selector: 'app-album-form',
  templateUrl: './album-form.component.html',
  styleUrls: ['./album-form.component.css']
})
export class AlbumFormComponent implements OnInit {
  public artists: Artist[];
  public genres: Genre[];
  public album: Album = new Album()

  constructor(private artistService: ArtistService, private genreService: GenreService, private albumService: AlbumService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.genreService.getAllGenres().subscribe(
      data => this.genres = data
    )
    this.artistService.getAllArtists().subscribe(
      data => this.artists = data
    )
    const idIsPresent = this.activatedRoute.snapshot.paramMap.has('id');
    if (idIsPresent) {
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      this.albumService.getAlbumById(id as unknown as number).subscribe(
        data => this.album = data
      )
    }
  }

  public saveAlbum() {
    console.log(this.album);
    if (this.album.albumId) {
      this.albumService.updateAlbum(this.album.albumId, this.album).subscribe(
        () => this.router.navigateByUrl('/albums')
      );
    } else {
      this.albumService.saveAlbum(this.album).subscribe(
        () => this.router.navigateByUrl('/albums')
      )
    }
  }
}
