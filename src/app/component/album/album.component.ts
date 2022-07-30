import {Component, OnInit} from '@angular/core';
import {Album} from "../../model/Album";
import {AlbumService} from "../../service/album.service";
import {Artist} from "../../model/Artist";
import {Genre} from "../../model/Genre";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  public albums: Album[];
  public artistDisplayStyle="none";
  public artist:Artist=new Artist();
  public genre: Genre=new Genre();
  public genreDisplayStyle="none";

  public face_name:string[] | undefined=[]
  public facetNameDisplayStyle="none";

  constructor(private albumService: AlbumService) {
  }
  ngOnInit(): void {
    this.getAllAlbums();
  }

  public getAllAlbums() {
    return this.albumService.getAllAlbums().subscribe(
      data => {
        this.albums = data;
      }
    )
  }

  public deleteAlbumById(albumId: number) {
    this.albumService.deleteAlbumById(albumId).subscribe(
      () => this.getAllAlbums()
    )
  }
  openArtistPopup(artist:Artist) {
    this.artist=artist;
    this.artistDisplayStyle = "block";
  }
  closeArtistPopup() {
    this.artistDisplayStyle = "none";
  }
  openGenrePopup(genre: Genre) {
    this.genre=genre;
    this.genreDisplayStyle = "block";
  }
  closeGenrePopup() {
    this.genreDisplayStyle = "none";
  }

  openFacetNamePopup(facet_name: string[] | undefined) {
    this.face_name=facet_name;
    this.facetNameDisplayStyle="block";
  }

  closeFacetNamePopup() {
    this.facetNameDisplayStyle="none";
  }
}
