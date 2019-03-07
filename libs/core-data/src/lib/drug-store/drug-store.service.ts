import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Drug } from './drug-store.model';
import { Observable } from 'rxjs';

const BASE_URL = "https://level-up-data.herokuapp.com/";
const model = 'drugs';

@Injectable({
  providedIn: 'root'
})
export class DrugStoreService {

  constructor(private http: HttpClient) {}

  get(): Observable<Drug[]> {
    return this.http.get<Drug[]>(this.getForUrl());
  }

  create(drugs: Drug): Observable<Drug> {
    return this.http.post<Drug>(this.getForUrl(), drugs);
  }

  update(drug: Drug): Observable<Drug> {
    return this.http.patch<Drug>(this.getForUrlId(drug.id), drug);
  }

  delete(drugId: number): any {
    return this.http.delete<any>(this.getForUrlId(drugId));
  }

  private getForUrl() {
    return `${BASE_URL}${model}`;
  }

  private getForUrlId(id: number) {
    return `${this.getForUrl()}/${id}`;
  }
}
