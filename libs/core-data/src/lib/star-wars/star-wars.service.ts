import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { StarWars } from './star-wars.model';

const BASE_URL = 'https://swapi.co/api/';
const model = 'people';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  constructor(private http: HttpClient) {}

  get(): Observable<StarWars[]> {
    return this.http.get<StarWars[]>(this.getForUrl()).pipe(
      map((res: any) =>
        res.results.map((starWar: StarWars) => this.stripStarWarsId(starWar))
      ),
      map((res: StarWars[]) =>
        res.map((starWar: StarWars) => this.stripStarWarsProperties(starWar))
      )
    );
  }

  create(starWar: StarWars): Observable<StarWars> {
    return this.http.post<StarWars>(this.getForUrl(), starWar);
  }

  update(starWar: StarWars): Observable<StarWars> {
    return this.http.patch<StarWars>(this.getForUrlId(starWar.id), starWar);
  }

  delete(starWarId: number): any {
    return this.http.delete<any>(this.getForUrlId(starWarId));
  }

  private getForUrl() {
    return `${BASE_URL}${model}`;
  }

  private getForUrlId(id: number) {
    return `${this.getForUrl()}/${id}`;
  }

  private stripStarWarsProperties(result: StarWars) {
    const {
      id,
      name,
      gender,
      height,
      mass,
      eye_color,
      skin_color,
      birth_year,
      url,
      ...payload
    } = result;

    const newStarWarsObj = {
      id,
      name,
      gender,
      height,
      mass,
      eye_color,
      skin_color,
      birth_year,
      url
    };

    return { ...newStarWarsObj };
  }

  private stripStarWarsId(result: StarWars) {
    const starWarsId = result.url.split('people/')[1].split('/')[0];
    return { id: Number(starWarsId), ...result };
  }
}
