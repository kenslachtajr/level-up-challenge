import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pizza } from './pizza.model';
import { Observable } from 'rxjs';

const BASE_URL = 'https://levelup-json-app.herokuapp.com/';
const model = 'pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  constructor(private http: HttpClient) {}

  get(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(this.getForUrl());
  }

  create(pizza: Pizza): Observable<Pizza> {
    return this.http.post<Pizza>(this.getForUrl(), pizza);
  }

  update(pizza: Pizza): Observable<Pizza> {
    return this.http.patch<Pizza>(this.getForUrlId(pizza.id), pizza);
  }

  delete(pizzaId: number): any {
    return this.http.delete<any>(this.getForUrlId(pizzaId));
  }

  private getForUrl() {
    return `${BASE_URL}${model}`;
  }

  private getForUrlId(id: number) {
    return `${this.getForUrl()}/${id}`;
  }
}
