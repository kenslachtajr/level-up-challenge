import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Painter } from './painter.model';
import { Observable } from 'rxjs';

const BASE_URL = "https://level-up-data.herokuapp.com/";
const model = 'painters';

@Injectable({
  providedIn: 'root'
})
export class PaintersService {
  constructor(private http: HttpClient) {}

  get(): Observable<Painter[]> {
    return this.http.get<Painter[]>(this.getForUrl());
  }

  create(painters: Painter): Observable<Painter> {
    return this.http.post<Painter>(this.getForUrl(), painters);
  }

  update(painter: Painter): Observable<Painter> {
    return this.http.patch<Painter>(this.getForUrlId(painter.id), painter);
  }

  delete(painterId: number): any {
    return this.http.delete<any>(this.getForUrlId(painterId));
  }

  private getForUrl() {
    return `${BASE_URL}${model}`
  }

  private getForUrlId(id: number) {
    return `${this.getForUrl()}/${id}`;
  }
}
