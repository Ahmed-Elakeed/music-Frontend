import { Component, OnInit } from '@angular/core';
import {Artist} from "../../../model/Artist";
import {ArtistService} from "../../../service/artist.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.css']
})
export class ArtistFormComponent implements OnInit {
  public artist:Artist=new Artist();
  constructor(private artistService:ArtistService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    const idIsPresent=this.activatedRoute.snapshot.paramMap.has('id');
    if(idIsPresent){
      const id=this.activatedRoute.snapshot.paramMap.get('id');
      this.artistService.getArtistById(id as unknown as number).subscribe(
        data=>{
          this.artist=data;
        }
      )
    }
  }

  public saveArtist() {
    if (this.artist.artistId) {
      return this.artistService.updateArtist(this.artist.artistId,this.artist).subscribe(
        data=>{
          console.log(data);
          this.router.navigateByUrl("/artists");
        }
      )
    }else{
      return this.artistService.saveArtist(this.artist).subscribe(
        data => {
          this.router.navigateByUrl("/artists");
        }
      );
    }
  }
}
