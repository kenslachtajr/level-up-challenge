import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Staff } from '@workspace/core-data';

@Component({
  selector: 'workspace-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent {
@Input() staff: Staff[];
@Output() selected = new EventEmitter();
@Output() deleted = new EventEmitter();
}
