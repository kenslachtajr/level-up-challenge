import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { StarWars } from './star-wars.model';

const BASE_URL = 'https://swapi.co/api/people/';
const model = 'star-wars';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  constructor(private http: HttpClient) {}

  get(): Observable<StarWars[]> {
    return this.http.get<StarWars[]>(this.getForUrl())
  }

  create(starWars: StarWars): Observable<StarWars> {
    return this.http.post<StarWars>(this.getForUrl(), starWars);
  }

  update(starWars: StarWars): Observable<StarWars> {
    return this.http.patch<StarWars>(this.getForUrlId(starWars.id), starWars);
  }

  delete(starWarsId: number): any {
    return this.http.delete<any>(this.getForUrlId(starWarsId));
  }

  private getForUrl() {
    return `${BASE_URL}${model}`;
  }

  private getForUrlId(id: number) {
    return `${this.getForUrl()}/${id}`;
  }
}


