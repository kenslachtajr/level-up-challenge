import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Golfer } from './pga.model';
import { Observable } from 'rxjs';

const BASE_URL = 'https://level-up-data.herokuapp.com/';
const model = 'pga';

@Injectable({
  providedIn: 'root'
})
export class PgaService {
  constructor(private http: HttpClient) {}

  get(): Observable<Golfer[]> {
    return this.http.get<Golfer[]>(this.getForUrl());
  }

  create(golfer: Golfer): Observable<Golfer> {
    return this.http.post<Golfer>(this.getForUrl(), golfer);
  }

  update(golfer: Golfer): Observable<Golfer> {
    return this.http.patch<Golfer>(this.getForUrlId(golfer.id), golfer);
  }

  delete(golferId: number): any {
    return this.http.delete<any>(this.getForUrlId(golferId));
  }

  private getForUrl() {
    return `${BASE_URL}${model}`;
  }

  private getForUrlId(id: number) {
    return `${this.getForUrl()}/${id}}`;
  }
}
