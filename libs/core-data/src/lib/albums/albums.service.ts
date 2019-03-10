import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from './album.model';
import { Observable } from 'rxjs';

const BASE_URL = 'https://level-up-data.herokuapp.com/';
const model = 'albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  constructor(private http: HttpClient) {}

  get(): Observable<Album[]> {
    return this.http.get<Album[]>(this.getForUrl());
  }

  create(album: Album): Observable<Album> {
    return this.http.post<Album>(this.getForUrl(), album);
  }

  update(album: Album): Observable<Album> {
    return this.http.patch<Album>(this.getForUrlId(album.id), album);
  }

  delete(albumId: number): any {
    return this.http.delete<any>(this.getForUrlId(albumId));
  }

  private getForUrl() {
    return `${BASE_URL}${model}`;
  }

  private getForUrlId(id: number) {
    return `${this.getForUrl()}/${id}`;
  }
}
