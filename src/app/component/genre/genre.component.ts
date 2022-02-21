import { Component, OnInit } from '@angular/core';
import {Genre} from "../../model/Genre";
import {GenreService} from "../../service/genre.service";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  public genres:Genre[];
  constructor(private genreService:GenreService) { }

  ngOnInit(): void {
    this.getAllGenres();
  }

  public getAllGenres() {
    this.genreService.getAllGenres().subscribe(
      data=>{
        this.genres=data;
      }
    )
  }

  public deleteGenreById(genreId: number) {
    this.genreService.deleteGenreById(genreId).subscribe(
      ()=>{
        this.getAllGenres();
      }
    )
  }
}
