import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Album} from "../model/Album";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private BaseUrl = 'http://localhost:8080/api/albums/';

  constructor(private http: HttpClient) {
  }

  public getAllAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.BaseUrl);
  }

  public getAlbumById(id: number): Observable<Album> {
    return this.http.get<Album>(this.BaseUrl + id);
  }

  public saveAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(this.BaseUrl, album);
  }

  public updateAlbum(id: number, album: Album): Observable<Album> {
    return this.http.put<Album>(this.BaseUrl + id, album);
  }

  public deleteAlbumById(id: number): Observable<Album> {
    return this.http.delete<Album>(this.BaseUrl + id);
  }
}
