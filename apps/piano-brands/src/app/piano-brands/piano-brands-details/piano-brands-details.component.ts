import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Piano } from '@workspace/core-data'; 

@Component({
  selector: 'workspace-piano-brands-details',
  templateUrl: './piano-brands-details.component.html',
  styleUrls: ['./piano-brands-details.component.scss']
})
export class PianoBrandsDetailsComponent {
  currentPiano: Piano;
  @Input() set selectPiano(value: Piano) {
    this.currentPiano = Object.assign({}, value);
  }
  @Output() cancelled = new EventEmitter();
  @Output() saved = new EventEmitter();
}
