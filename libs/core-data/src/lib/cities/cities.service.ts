import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from './city.model';
import { Observable } from 'rxjs';

const BASE_URL = 'https://level-up-data.herokuapp.com/';
const model = 'cities';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  constructor(private http: HttpClient) {}

  get(): Observable<City[]> {
    return this.http.get<City[]>(this.getForUrl());
  }

  create(city: City): Observable<City> {
    return this.http.post<City>(this.getForUrl(), city);
  }

  update(city: City): Observable<City> {
    return this.http.patch<City>(this.getForUrlId(city.id), city);
  }

  delete(cityId: number): any {
    return this.http.delete<any>(this.getForUrlId(cityId));
  }

  private getForUrl() {
    return `${BASE_URL}${model}`;
  }

  private getForUrlId(id: number) {
    return `${this.getForUrl()}/${id}`;
  }
}
