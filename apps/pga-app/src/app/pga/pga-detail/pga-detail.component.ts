import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Golfer } from '@workspace/core-data'; 

@Component({
  selector: 'workspace-pga-detail',
  templateUrl: './pga-detail.component.html',
  styleUrls: ['./pga-detail.component.scss']
})
export class PgaDetailComponent {
  currentGolfer: Golfer;
  @Input() set selectGolfer(value: Golfer) {
    this.currentGolfer = Object.assign({}, value);
  }
  @Output() cancelled = new EventEmitter();
  @Output() saved = new EventEmitter();
}
