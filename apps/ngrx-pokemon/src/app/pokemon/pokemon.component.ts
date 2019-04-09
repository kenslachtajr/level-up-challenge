import { Component, OnInit } from '@angular/core';
import { PokemonFacade } from '@workspace/core-state';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Pokemon } from '@workspace/core-data';

@Component({
  selector: 'workspace-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemons$: Observable<Pokemon[]> = this.pokemonFacade.allPokemon$;
  pokemon$: Observable<Pokemon> = this.pokemonFacade.currentPokemon$;
  loading$: Observable<boolean> = this.pokemonFacade.pokemonLoading$;
  form: FormGroup;

  constructor(
    private pokemonFacade: PokemonFacade,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.pokemonFacade.loadPokemon();
    this.pokemonFacade.mutations$.subscribe(_ => this.reset());
    this.initForm();
  }

  selectPokemon(pokemon: Pokemon) {
    this.form.patchValue(pokemon);
    this.pokemonFacade.selectPokemon(pokemon.id);
  }

  savePokemon(pokemon: Pokemon) {
    if (this.form.valid) {
      pokemon.id
        ? this.pokemonFacade.updatePokemon(pokemon)
        : this.pokemonFacade.addPokemon(pokemon);
    }
  }

  deletePokemon(pokemon: Pokemon) {
    this.pokemonFacade.deletePokemon(pokemon);
  }

  reset() {
    this.form.reset();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      name: '',
      url: '',
      base_experience: [null],
      height: [null],
      weight: [null]
    });
  }
}
