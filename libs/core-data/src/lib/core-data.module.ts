import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from './todo/todo.service';
import { EmployeesService } from './employees/employees.service';
import { PizzaService } from './pizza/pizza.service';
import { JazzService } from './jazz/jazz.service';
import { ClientsService } from './clients/clients.service';
import { StaffService } from './staff/staff.service';
import { PgaService } from './pga/pga.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [TodoService, EmployeesService, PizzaService, JazzService, ClientsService, StaffService, PgaService],
  exports: [HttpClientModule]
})
export class CoreDataModule {}
