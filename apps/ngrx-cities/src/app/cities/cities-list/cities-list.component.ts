import { Component, Input, Output, EventEmitter } from '@angular/core';
import { City } from '@workspace/core-data';

@Component({
  selector: 'workspace-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss']
})
export class CitiesListComponent {
  @Input() cities: City[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
