import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreStateModule } from '@workspace/core-state';
import { CoreDataModule } from '@workspace/core-data';
import { MaterialModule } from '@workspace/material';
import { UiToolbarModule } from '@workspace/ui-toolbar';
import { UiLoginModule } from '@workspace/ui-login';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { LoginComponent } from './login/login.component';
import { StarWarsComponent } from './star-wars/star-wars.component';
import { StarWarsDetailsComponent } from './star-wars/star-wars-details/star-wars-details.component';
import { StarWarsListComponent } from './star-wars/star-wars-list/star-wars-list.component';

@NgModule({
  declarations: [
    AppComponent, 
    StarWarsComponent, 
    LoginComponent, 
    StarWarsDetailsComponent, 
    StarWarsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiToolbarModule,
    UiLoginModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
