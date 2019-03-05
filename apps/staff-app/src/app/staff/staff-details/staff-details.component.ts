import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Staff } from '@workspace/core-data';

@Component({
  selector: 'workspace-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.scss']
})
export class StaffDetailsComponent {
  currentStaff: Staff;
  @Input() set selectStaff(value: Staff) {
    this.currentStaff = Object.assign({}, value);
  }
  @Output() cancelled = new EventEmitter();
  @Output() saved = new EventEmitter();
}
