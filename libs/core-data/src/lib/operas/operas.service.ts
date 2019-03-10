import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Opera } from './opera.model';
import { Observable } from 'rxjs';

const BASE_URL = 'https://level-up-data.herokuapp.com/';
const model = 'operas';

@Injectable({
  providedIn: 'root'
})
export class OperasService {
  constructor(private http: HttpClient) {}

  get(): Observable<Opera[]> {
    return this.http.get<Opera[]>(this.getForUrl());
  }

  create(opera: Opera): Observable<Opera> {
    return this.http.post<Opera>(this.getForUrl(), opera);
  }

  update(opera: Opera): Observable<Opera> {
    return this.http.patch<Opera>(this.getForUrlId(opera.id), opera);
  }

  delete(operaId: number) {
    return this.http.delete<any>(this.getForUrlId(operaId));
  }

  private getForUrl() {
    return `${BASE_URL}${model}`;
  }

  private getForUrlId(id: number) {
    return `${this.getForUrl()}/${id}`;
  }
}
