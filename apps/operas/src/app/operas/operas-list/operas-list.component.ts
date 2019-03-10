import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Opera } from '@workspace/core-data';

@Component({
  selector: 'workspace-operas-list',
  templateUrl: './operas-list.component.html',
  styleUrls: ['./operas-list.component.scss']
})
export class OperasListComponent {
  @Input() operas: Opera[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
