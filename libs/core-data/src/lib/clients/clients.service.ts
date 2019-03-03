import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './client.model';
import { Observable } from 'rxjs';

const BASE_URL = "https://level-up-data.herokuapp.com/";
const model = 'clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  constructor(private http: HttpClient) {}

  get(): Observable<Client[]> {
    return this.http.get<Client[]>(this.getForUrl());
  }

  create(client: Client): Observable<Client> {
    return this.http.post<Client>(this.getForUrl(), client);
  }

  update(client: Client): Observable<Client> {
    return this.http.patch<Client>(this.getForUrlId(client.id), client);
  }

  delete(clientId: number): any {
    return this.http.delete<any>(this.getForUrlId(clientId));
  }

  private getForUrl() {
    return `${BASE_URL}${model}`;
  }

  private getForUrlId(id: number) {
    return `${this.getForUrl()}/${id}`;
  }
}
