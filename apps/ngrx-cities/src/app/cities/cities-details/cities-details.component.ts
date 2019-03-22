import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { City } from '@workspace/core-data';

@Component({
  selector: 'workspace-cities-details',
  templateUrl: './cities-details.component.html',
  styleUrls: ['./cities-details.component.scss']
})
export class CitiesDetailsComponent {
  currentCity: City;
  @Input() group: FormGroup;

  @Input()
  set selectCity(value: City) {
    this.currentCity = Object.assign({}, value);
  }
  @Output() cancelled = new EventEmitter();
  @Output() saved = new EventEmitter();
}
