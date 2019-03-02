import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoreDataModule } from '@workspace/core-data';
import { MaterialModule } from '@workspace/material';
import { UiToolbarModule } from '@workspace/ui-toolbar';
import { UiLoginModule } from '@workspace/ui-login';

import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { JazzComponent } from './jazz/jazz.component';
import { LoginComponent } from './login/login.component';
import { MusiciansListComponent } from './jazz/musicians-list/musicians-list.component';
import { MusiciansDetailsComponent } from './jazz/musicians-details/musicians-details.component';

@NgModule({
  declarations: [ 
    AppComponent, 
    JazzComponent, 
    MusiciansListComponent, 
    MusiciansDetailsComponent, 
    LoginComponent ],
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
