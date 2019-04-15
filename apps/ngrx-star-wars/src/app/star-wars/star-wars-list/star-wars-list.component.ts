import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StarWars } from '@workspace/core-data';

@Component({
  selector: 'workspace-star-wars-list',
  templateUrl: './star-wars-list.component.html',
  styleUrls: ['./star-wars-list.component.scss']
})
export class StarWarsListComponent {
  @Input() starWars: StarWars[];
  @Input() isLoading: boolean;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  selectStarWar(starWar: StarWars) {
    this.selected.emit(starWar);
  }

  deleteStarWar(starWar: StarWars) {
    this.deleted.emit(starWar);
  }
}
