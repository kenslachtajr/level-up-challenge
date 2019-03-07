import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Color } from './colors.model';
import { Observable } from 'rxjs';

const BASE_URL = 'https://level-up-data.herokuapp.com/';
const model = 'colors';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  constructor(private http: HttpClient) { }

  get(): Observable<Color[]> {
    return this.http.get<Color[]>(this.getForUrl());
  }

  create(color: Color): Observable<Color> {
    return this.http.post<Color>(this.getForUrl(), color);
  }

  update(color: Color): Observable<Color> {
    return this.http.patch<Color>(this.getForUrlId(color.id), color)
  }

  delete(colorId: number): any {
    return this.http.delete<any>(this.getForUrlId(colorId));
  }

  private getForUrl() {
    return `${BASE_URL}${model}`;
  }

  private getForUrlId(id: number) {
    return `${this.getForUrl()}/${id}`;
  }

}
