import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { City } from '@workspace/core-data';

@Component({
  selector: 'workspace-cities-details',
  templateUrl: './cities-details.component.html',
  styleUrls: ['./cities-details.component.scss']
})
export class CitiesDetailsComponent {
  @Input() group: FormGroup;
  @Output() canceled = new EventEmitter();
  @Output() saved = new EventEmitter();

  saveCity(city: City) {
    this.saved.emit(city);
  }

  cancel() {
    this.canceled.emit();
  }
}
