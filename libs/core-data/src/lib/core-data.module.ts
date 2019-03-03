import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from './todo/todo.service';
import { EmployeesService } from './employees/employees.service';
import { PizzaService } from './pizza/pizza.service';
import { JazzService } from './jazz/jazz.service';
import { ClientsService } from './clients/clients.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [TodoService, EmployeesService, PizzaService, JazzService, ClientsService],
  exports: [HttpClientModule]
})
export class CoreDataModule {}
