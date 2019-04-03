import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from './todo/todo.service';
import { EmployeesService } from './employees/employees.service';
import { PizzaService } from './pizza/pizza.service';
import { JazzService } from './jazz/jazz.service';
import { ClientsService } from './clients/clients.service';
import { StaffService } from './staff/staff.service';
import { PgaService } from './pga/pga.service';
import { DrugStoreService } from './drug-store/drug-store.service';
import { ColorsService } from './colors/colors.service';
import { PianoBrandsService } from './piano-brands/piano-brands.service';
import { CitiesService } from './cities/cities.service';
import { PaintersService } from './painters/painters.service';
import { LiteratureService } from './literature/literature.service';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './pokemon/pokemon.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    TodoService,
    EmployeesService,
    PizzaService,
    JazzService,
    ClientsService,
    StaffService,
    PgaService,
    DrugStoreService,
    ColorsService,
    PianoBrandsService,
    CitiesService,
    PaintersService,
    LiteratureService,
    PokemonService
  ],
  exports: [HttpClientModule]
})
export class CoreDataModule {}
