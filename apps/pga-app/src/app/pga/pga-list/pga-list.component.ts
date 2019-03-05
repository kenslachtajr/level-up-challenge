import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Golfer } from '@workspace/core-data';

@Component({
  selector: 'workspace-pga-list',
  templateUrl: './pga-list.component.html',
  styleUrls: ['./pga-list.component.scss']
})
export class PgaListComponent {
@Input() golfer: Golfer[];
@Output() selected = new EventEmitter();
@Output() deleted = new EventEmitter();
}
