import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from './todo/todo.service';
import { EmployeesService } from './employees/employees.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [TodoService, EmployeesService],
  exports: [HttpClientModule]
})
export class CoreDataModule {}
