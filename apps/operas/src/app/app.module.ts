import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoreDataModule } from '@workspace/core-data';
import { MaterialModule } from '@workspace/material';
import { UiToolbarModule } from '@workspace/ui-toolbar';
import { UiLoginModule } from '@workspace/ui-login';

import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OperasComponent } from './operas/operas.component';
import { OperasListComponent } from './operas/operas-list/operas-list.component';
import { OperaDetailsComponent } from './operas/opera-details/opera-details.component';

@NgModule({
  declarations: [
    AppComponent, 
    OperasComponent, 
    LoginComponent, 
    OperasListComponent, 
    OperaDetailsComponent
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
