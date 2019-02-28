import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '@workspace/core-data';

@Component({
  selector: 'workspace-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent {
  @Input() employees: Employee[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
