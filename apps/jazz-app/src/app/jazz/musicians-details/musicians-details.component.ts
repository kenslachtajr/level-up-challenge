import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Musician } from '@workspace/core-data';

@Component({
  selector: 'workspace-musicians-details',
  templateUrl: './musicians-details.component.html',
  styleUrls: ['./musicians-details.component.scss']
})
export class MusiciansDetailsComponent {
  currentMusician: Musician;
  @Input() set selectMusician(value: Musician) {
    this.currentMusician = Object.assign({}, value);
  }
  @Output() cancelled = new EventEmitter();
  @Output() saved = new EventEmitter();
}
