import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Musician } from '@workspace/core-data';

@Component({
  selector: 'workspace-musicians-list',
  templateUrl: './musicians-list.component.html',
  styleUrls: ['./musicians-list.component.scss']
})
export class MusiciansListComponent {
@Input() musicians: Musician[];
@Output() selected = new EventEmitter();
@Output() deleted = new EventEmitter();
}
