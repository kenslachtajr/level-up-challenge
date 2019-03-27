import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Literature } from './literature.model';
import { Observable } from 'rxjs';

const BASE_URL = 'https://level-up-data.herokuapp.com/';
const model = 'literature';

@Injectable({
  providedIn: 'root'
})
export class LiteratureService {
  constructor(private http: HttpClient) {}

  get(): Observable<Literature[]> {
    return this.http.get<Literature[]>(this.getForUrl());
  }

  create(literature: Literature): Observable<Literature> {
    return this.http.post<Literature>(this.getForUrl(), literature);
  }

  update(literature: Literature): Observable<Literature> {
    return this.http.patch<Literature>(this.getForUrlId(literature.id), literature);
  }

  delete(literatureId: number): any {
    return this.http.delete<any>(this.getForUrlId(literatureId));
  }

  private getForUrl() {
    return `${BASE_URL}${model}`;
  }

  private getForUrlId(id: number) {
    return `${this.getForUrl()}/${id}`;
  }
}
