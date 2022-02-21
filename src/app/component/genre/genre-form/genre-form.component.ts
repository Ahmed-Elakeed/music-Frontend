import {Component, OnInit} from '@angular/core';
import {Genre} from "../../../model/Genre";
import {GenreService} from "../../../service/genre.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-genre-form',
  templateUrl: './genre-form.component.html',
  styleUrls: ['./genre-form.component.css']
})
export class GenreFormComponent implements OnInit {
  public genre: Genre = new Genre();

  constructor(private genreService: GenreService, private activatedRoute: ActivatedRoute,private router:Router) {
  }

  ngOnInit(): void {
    const idIsPresent = this.activatedRoute.snapshot.paramMap.has('id');
    if (idIsPresent) {
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      this.genreService.getGenreById(id as unknown as number).subscribe(
        (data) => {
          this.genre = data;
        }
      )
    }
  }

  saveGenre() {
    if(this.genre.genreId){
      this.genreService.updateGenre(this.genre.genreId,this.genre).subscribe(
        ()=>this.router.navigateByUrl("/genres")
      )
    }else{
      this.genreService.saveGenre(this.genre).subscribe(
        ()=>this.router.navigateByUrl("/genres")
      )
    }
  }
}
