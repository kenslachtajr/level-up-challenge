import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreDataModule } from '@workspace/core-data';
import { MaterialModule } from '@workspace/material';
import { UiToolbarModule } from '@workspace/ui-toolbar';
import { UiLoginModule } from '@workspace/ui-login';
import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, 
    EmployeesComponent, 
    LoginComponent, 
    EmployeesListComponent, 
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreDataModule,
    MaterialModule,
    UiToolbarModule,
    UiLoginModule,
    RoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
