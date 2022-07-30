import { Component, OnInit } from '@angular/core';
import {AlbumService} from "../../service/album.service";
import {ArtistService} from "../../service/artist.service";
import {GenreService} from "../../service/genre.service";
import {Album} from "../../model/Album";
import {Artist} from "../../model/Artist";
import {Genre} from "../../model/Genre";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public albums: Album[]=[];
  public artists:Artist[]=[];
  public genres:Genre[]=[];
  searchWord="";
  resultNumber=0;
  albumRadio=false;
  artistRadio=false;
  genreRadio=false;

  constructor(private albumService:AlbumService,private artistService:ArtistService,private genreService:GenreService) { }

  ngOnInit(): void {
  }

  search() {
    if(this.searchWord!='') {
      this.genreService.getAllGenres().subscribe(
        data => {
          this.genres = data;
          if(this.genreRadio){
            this.resultNumber+=data.length;
          }
        }
      )
      this.artistService.getAllArtists().subscribe(
        data => {
          this.artists = data;
          if(this.artistRadio){
            this.resultNumber+=data.length;
          }
        }
      )
      this.albumService.getAllAlbums().subscribe(
        data => {
          this.albums = data;
          if(this.albumRadio){
            this.resultNumber+=data.length;
          }
        }
      )
    }
  }

  allRadioChecked() {
    this.albumRadio = true;
    this.artistRadio = true;
    this.genreRadio = true;
    if (this.searchWord == '') {
      this.resultNumber = 0;
    } else {
      this.resultNumber = this.albums.length + this.artists.length + this.genres.length;
    }
  }
  albumRadioChecked() {
    this.albumRadio=true;
    this.artistRadio=false;
    this.genreRadio=false;
    if (this.searchWord == '') {
      this.resultNumber = 0;
    } else {
      this.resultNumber=this.albums.length;
    }
  }
  artistRadioChecked() {
    this.albumRadio=false;
    this.artistRadio=true;
    this.genreRadio=false;
    if (this.searchWord == '') {
      this.resultNumber = 0;
    } else {
      this.resultNumber=this.artists.length;
    }
  }
  genreRadioChecked() {
    this.albumRadio=false;
    this.artistRadio=false;
    this.genreRadio=true;
    if (this.searchWord == '') {
      this.resultNumber = 0;
    } else {
      this.resultNumber=this.genres.length;
    }
  }

  checkEmptyWord() {
    if(this.searchWord==''){
      this.resultNumber=0;
      this.albums=[];
      this.artists=[];
      this.genres=[];
    }
  }
}
