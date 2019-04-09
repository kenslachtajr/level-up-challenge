import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Pokemon } from '@workspace/core-data';

@Component({
  selector: 'workspace-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent {
  @Input() group: FormGroup;
  @Output() cancelled = new EventEmitter();
  @Output() saved = new EventEmitter();

  savePokemon(pokemon: Pokemon) {
    this.saved.emit(pokemon);
  }

  cancel() {
    this.cancelled.emit();
  }
}
