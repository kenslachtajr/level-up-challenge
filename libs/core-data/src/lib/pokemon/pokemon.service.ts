import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './pokemon.model';
import { Observable } from 'rxjs';

const BASE_URL = 'https://level-up-data.herokuapp.com/';
const model = 'pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  get(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.getForUrl());
  }

  create(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.post<Pokemon>(this.getForUrl(), pokemon);
  }

  update(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.patch<Pokemon>(this.getForUrlId(pokemon.id), pokemon);
  }

  delete(pokemonId: number): any {
    return this.http.delete<any>(this.getForUrlId(pokemonId));
  }

  private getForUrl() {
    return `${BASE_URL}${model}`;
  }

  private getForUrlId(id: number) {
    return `${this.getForUrl()}/${id}`;
  }
}
