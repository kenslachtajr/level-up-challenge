import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreDataModule } from '@workspace/core-data';
import { MaterialModule } from '@workspace/material';
import { UiToolbarModule } from '@workspace/ui-toolbar';
import { UiLoginModule } from '@workspace/ui-login';

import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ColorsComponent } from './colors/colors.component';
import { ColorsDetailsComponent } from './colors/colors-details/colors-details.component';
import { ColorsListComponent } from './colors/colors-list/colors-list.component';

@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent, 
    ColorsComponent, 
    ColorsDetailsComponent, 
    ColorsListComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CoreDataModule,
    MaterialModule,
    UiToolbarModule,
    UiLoginModule,
    RoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
