import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Piano } from './piano-brands.model';
import { Observable } from 'rxjs';

const BASE_URL = 'https://level-up-data.herokuapp.com/';
const model = 'pianoBrands';

@Injectable({
  providedIn: 'root'
})
export class PianoBrandsService {

  constructor(private http: HttpClient) {}

  get(): Observable<Piano[]> {
    return this.http.get<Piano[]>(this.getForUrl());
  }

  create(piano: Piano): Observable<Piano> {
    return this.http.post<Piano>(this.getForUrl(), piano);
  }

  update(piano: Piano): Observable<Piano> {
    return this.http.patch<Piano>(this.getForUrlId(piano.id), piano);
  }

  delete(pianoId: number): any {
    return this.http.delete<any>(this.getForUrlId(pianoId));
  }
  
private getForUrl() {
  return `${BASE_URL}${model}`;
}

  private getForUrlId(id: number) {
    return `${this.getForUrl()}/${id}`;
  }
}
