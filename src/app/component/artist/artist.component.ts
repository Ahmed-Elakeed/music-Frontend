import {Component, OnInit} from '@angular/core';
import {Artist} from "../../model/Artist";
import {ArtistService} from "../../service/artist.service";
import {Router} from "@angular/router";
import {Album} from "../../model/Album";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  public artists: Artist[];

  constructor(private artistService: ArtistService) {
  }

  ngOnInit(): void {
    this.getAllArtists();
  }

  public getAllArtists() {
    this.artistService.getAllArtists().subscribe(
      data => {
        this.artists = data;
      }
    )
  }

  public deleteArtistById(artistId: number) {
    this.artistService.deleteArtistById(artistId).subscribe(
      () => {
        this.getAllArtists();
      }
    );
  }
}
