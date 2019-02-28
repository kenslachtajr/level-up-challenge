import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Employee } from '@workspace/core-data';

@Component({
  selector: 'workspace-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent {
  currentEmployee: Employee;
  @Input() set selectEmployee(value: Employee) {
    this.currentEmployee = Object.assign({}, value);
  }
  @Output() cancelled = new EventEmitter();
  @Output() saved = new EventEmitter();
}
