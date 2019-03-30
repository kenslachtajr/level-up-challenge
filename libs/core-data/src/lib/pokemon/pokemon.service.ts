import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { Pokemon } from './pokemon.model';

const BASE_URL = 'https://pokeapi.co/api/v2/';
const model = 'pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  get(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.getForUrl())
      .pipe(
        // When we first make a call to the API, we get an Object that contains { count, next, previous, results }.
        // What we really want is just the results. The problem is that results gives an Array of Objects containing just { name, url }.
        // What we first have to accomplish is somehow grabbing the id (which is in the url) and makeing a new Object with an id -> { id, name, url }.
        // We need this so that we can make a call for each pokemon and return an array with all pokemon properties in one Observable stream.
        // As you can see in this `map` operator, we send each individual Pokemon to the `stripPokeId` function.
        map((res: any) => res.results.map((pokemon: Pokemon) => this.stripPokeId(pokemon))),
        // Okay, so we now have an array with Object containing id, name, and url.
        // That is still not what we want because that still doesn't give us much to work with.
        // We know that the api has all of the other properties that we want if we hit the endpoint witht he pokemons id.
        // Well we can do that because we now have each Pokemons id.
        // The next problem we have to solve is, how do we unwrap an Observable inside of another.
        // Becasue remember, the `HttpClient` returns your data in an Observable.
        // We can deal with this by using `forkJoin` as you see here. (check out: https://www.learnrxjs.io/operators/combination/forkjoin.html)
        // This will now give an array with all the Pokemons data.
        mergeMap((res: Pokemon[]) => (forkJoin(res.map((poke: Pokemon) => this.http.get(this.getForUrlId(poke.id)))))),
        // We are almost done! Looking at the data returned by the API, we can see that it gives us way more information that we need.
        // We just need to return an array of pokemon containing the data that is defined in our interface.
        // We will need to map to our data and send it to the function below.
        map((res: Pokemon[]) => res.map((poke: Pokemon) => this.stripPokemonProperties(poke)))
        // We now have an array of Objects with the specific data that we want.
      );
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

  private stripPokemonProperties(result: Pokemon) {
    // This function is just destructuring one Object and creating a new one.
    // What we will have to do here is pluck out the desired properties we want and then spread in everything else that we don't care about as `...payload`
    // and set that equal to result, since that is the Object that we are bringing in.
    const { id, name, url, base_experience, height, weight, ...payload } = result;

    // Then we create the Object with the properties we want.
    const newPokemonObj = { id, name, url, base_experience, height, weight };

    // And spread in that Object into a new one here and return that new one.
    return { ...newPokemonObj };
  }

  private stripPokeId(result: Pokemon) {
    // This function first grabs the url and splits out the id and assigns it to the `pokemonId` variable.

    // The URL will look like this: https://pokeapi.co/api/v2/pokemon/1/ (the last number is what we want, that is the "id").
    // By splitting at 'pokemon/' we will remove that entire string and return an array of two strings: [ 'https://pokeapi.co/api/v2/', '1/' ].
    // We can see what we want is in index 1, so, `result.url.split('pokemon/')[1]` will return: '1/'.
    // One last thing, we need just the number, so now we can split at '/' which will return: '1'.
    // Now `pokemonId` equals '1'.
    const pokemonId = result.url.split('pokemon/')[1].split('/')[0];

    // Now we just have to create a new Object with the id included.
    // We do this by spreading the entire result into the new array (which we know contain values to name and url).
    // and right before that we add the property `id` to `pokemonId`
    // To ensure that the id is a number we just wrapped the string of a number around `Number` to get the numerical value.
    return { id: Number(pokemonId), ...result };
  }
}
