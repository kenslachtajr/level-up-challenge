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
import { PgaComponent } from './pga/pga.component';
import { PgaListComponent } from './pga/pga-list/pga-list.component';
import { PgaDetailComponent } from './pga/pga-detail/pga-detail.component';

@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent, 
    PgaComponent, 
    PgaListComponent, 
    PgaDetailComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CoreDataModule,
    MaterialModule,
    UiToolbarModule,
    UiLoginModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
