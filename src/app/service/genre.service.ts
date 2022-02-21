import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Genre} from "../model/Genre";

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private BaseUrl = 'http://localhost:8080/api/genres/';

  constructor(private http: HttpClient) {
  }

  public getAllGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.BaseUrl);
  }

  public getGenreById(id: number): Observable<Genre> {
    return this.http.get<Genre>(this.BaseUrl + id);
  }

  public saveGenre(genre: Genre): Observable<Genre> {
    return this.http.post<Genre>(this.BaseUrl, genre);
  }

  public updateGenre(id: number, genre: Genre): Observable<Genre> {
    return this.http.put<Genre>(this.BaseUrl + id, genre);
  }

  public deleteGenreById(id: number): Observable<Genre> {
    return this.http.delete<Genre>(this.BaseUrl + id);
  }
}
