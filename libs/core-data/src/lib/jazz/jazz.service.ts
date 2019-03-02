import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Musician } from './jazz.model';
import { Observable } from 'rxjs';

const BASE_URL = 'https://levelup-json-app.herokuapp.com/';
const model = 'musician';

@Injectable({
  providedIn: 'root'
})
export class JazzService {
  constructor(private http: HttpClient) {}

  get(): Observable<Musician[]> {
    return this.http.get<Musician[]>(this.getForUrl());
  }

  create(musician: Musician): Observable<Musician> {
    return this.http.post<Musician>(this.getForUrl(), musician);
  }

  update(musician: Musician): Observable<Musician> {
    return this.http.patch<Musician>(this.getForUrlId(musician.id), musician);
  }

  delete(musicianId: number): any {
    return this.http.delete<any>(this.getForUrlId(musicianId));
  };

  private getForUrl() {
    return `${BASE_URL}${model}`;
  }

  private getForUrlId(id: number) {
    return `${this.getForUrl()}/${id}`;
  }
}
