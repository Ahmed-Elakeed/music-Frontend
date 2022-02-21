import {Artist} from "./Artist";
import {Genre} from "./Genre";

export class Album {
  albumId: number;
  albumName: String;
  releasedDate: Date;
  artist: Artist=new Artist();
  genre: Genre=new Genre();

}
