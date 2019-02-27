import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreDataModule } from '@workspace/core-data';
import { MaterialModule } from '@workspace/material';
import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoDetailsComponent } from './todo/todo-details/todo-details.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    BrowserModule, 
    CoreDataModule,
    MaterialModule, 
    RoutingModule],
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    TodoDetailsComponent,
    LoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
