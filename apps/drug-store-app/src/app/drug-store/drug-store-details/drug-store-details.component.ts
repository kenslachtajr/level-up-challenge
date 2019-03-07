import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Drug } from '@workspace/core-data';

@Component({
  selector: 'workspace-drug-store-details',
  templateUrl: './drug-store-details.component.html',
  styleUrls: ['./drug-store-details.component.scss']
})
export class DrugStoreDetailsComponent {
  currentDrug: Drug;
  @Input()
  set selectDrug(value: Drug) {
    this.currentDrug = Object.assign({}, value);
  }
  @Output() cancelled = new EventEmitter();
  @Output() saved = new EventEmitter();
}
