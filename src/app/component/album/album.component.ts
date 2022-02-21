import {Component, OnInit} from '@angular/core';
import {Album} from "../../model/Album";
import {AlbumService} from "../../service/album.service";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  public albums: Album[];

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
}
