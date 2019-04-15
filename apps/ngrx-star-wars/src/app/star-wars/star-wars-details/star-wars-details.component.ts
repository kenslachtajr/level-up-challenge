import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StarWars } from '@workspace/core-data';

@Component({
  selector: 'workspace-star-wars-details',
  templateUrl: './star-wars-details.component.html',
  styleUrls: ['./star-wars-details.component.scss']
})
export class StarWarsDetailsComponent {
  @Input() group: FormGroup;
  @Output() cancelled = new EventEmitter();
  @Output() saved = new EventEmitter();

  saveStarWar(starWar: StarWars) {
    this.saved.emit(starWar);
  }

  cancel() {
    this.cancelled.emit();
  }
}
