import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Artist} from "../model/Artist";
import {Album} from "../model/Album";

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private BaseUrl = 'http://localhost:8080/api/artists/';

  constructor(private http: HttpClient) {
  }

  public getAllArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.BaseUrl);
  }

  public getArtistById(id: number): Observable<Artist> {
    return this.http.get<Artist>(this.BaseUrl + id);
  }

  public saveArtist(artist: Artist): Observable<Artist> {
    return this.http.post<Artist>(this.BaseUrl, artist);
  }

  public updateArtist(id: number, artist: Artist): Observable<Artist> {
    return this.http.put<Artist>(this.BaseUrl + id, artist);
  }

  public deleteArtistById(id: number): Observable<Artist> {
    return this.http.delete<Artist>(this.BaseUrl + id);
  }
  public albumsForArtistById(id:number):Observable<Album[]>{
    return this.http.get<Album[]>(this.BaseUrl+id+'/albums');
  }
}
