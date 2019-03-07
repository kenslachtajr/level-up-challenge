import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Drug } from '@workspace/core-data'; 

@Component({
  selector: 'workspace-drug-store-list',
  templateUrl: './drug-store-list.component.html',
  styleUrls: ['./drug-store-list.component.scss']
})
export class DrugStoreListComponent {
  @Input() drugs: Drug[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
