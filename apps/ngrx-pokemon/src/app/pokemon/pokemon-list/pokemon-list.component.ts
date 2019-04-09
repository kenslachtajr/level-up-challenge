import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '@workspace/core-data';

@Component({
  selector: 'workspace-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  @Input() pokemons: Pokemon[];
  @Input() isLoading: boolean;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  selectPokemon(pokemon: Pokemon) {
    this.selected.emit(pokemon);
  }

  deletePokemon(pokemon: Pokemon) {
    this.deleted.emit(pokemon);
  }
}
