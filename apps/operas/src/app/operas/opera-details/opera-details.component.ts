import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Opera } from '@workspace/core-data';

@Component({
  selector: 'workspace-opera-details',
  templateUrl: './opera-details.component.html',
  styleUrls: ['./opera-details.component.scss']
})
export class OperaDetailsComponent {
  currentOpera: Opera;
  @Input() set selectOpera(value: Opera) {
    this.currentOpera = Object.assign({}, value);
  }
  @Output() cancelled = new EventEmitter();
  @Output() saved = new EventEmitter();
}
