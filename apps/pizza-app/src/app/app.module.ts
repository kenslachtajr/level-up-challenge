import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoreDataModule } from '@workspace/core-data';
import { MaterialModule } from '@workspace/material';
import { UiToolbarModule } from '@workspace/ui-toolbar';
import { UiLoginModule } from '@workspace/ui-login';

import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { LoginComponent } from './login/login.component';
import { PizzaDetailsComponent } from './pizza/pizza-details/pizza-details.component';
import { PizzaListComponent } from './pizza/pizza-list/pizza-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    LoginComponent,
    PizzaDetailsComponent,
    PizzaListComponent
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
