import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee, EmployeesService } from '@workspace/core-data';

@Component({
  selector: 'workspace-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employee: Employee;
  employees$: Observable<Employee[]>;

  constructor(private employeesService: EmployeesService) {}

  ngOnInit() {
    this.getEmployees();
  }

  selectEmployee(employee: Employee) {
    this.employee = employee;
  }

  getEmployees() {
    this.employees$ = this.employeesService.get();
  }

  saveEmployee(employee: Employee) {
    employee.id ? this.updateEmployee(employee) : this.createEmployee(employee);
  }

  createEmployee(employee: Employee) {
    this.employeesService.create(employee).subscribe(res => {
      this.reset();
      this.getEmployees();
    });
  }

  updateEmployee(employee: Employee) {
    this.employeesService.update(employee).subscribe(res => {
      this.reset();
      this.getEmployees();
    });
  }

  deleteEmployee(employeeId: number) {
    this.employeesService.delete(employeeId).subscribe(res => {
      this.reset();
      this.getEmployees();
    });
  }

  reset() {
    const emptyEmployee: Employee = {
      id: null,
      userId: '',
      jobTitle: '',
      fullName: '',
      preferredName: '',
      employeeCode: '',
      phoneNumber: '',
      emailAddress: '',
      address: {
        street1: '',
        street2: '',
        city: '',
        state: '',
        zip: ''
      }
    };
    this.selectEmployee(emptyEmployee);
  }
}
