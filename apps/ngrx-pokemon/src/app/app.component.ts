import { PokemonService } from '@workspace/core-data';
import { Component } from '@angular/core';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-pokemon';
  poke;
  constructor(private pokeService: PokemonService) {
    this.poke = pokeService.get();
  }
}
