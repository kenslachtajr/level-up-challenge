import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreDataModule } from '@workspace/core-data';
import { MaterialModule } from '@workspace/material';
import { UiToolbarModule } from '@workspace/ui-toolbar';
import { UiLoginModule } from '@workspace/ui-login';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { LoginComponent } from './login/login.component';
import { PaintersComponent } from './painters/painters.component';
import { PaintersListComponent } from './painters/painters-list/painters-list.component';
import { PaintersDetailsComponent } from './painters/painters-details/painters-details.component';
import { CoreStateModule } from '@workspace/core-state';

@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent,
    PaintersComponent, 
    PaintersListComponent, 
    PaintersDetailsComponent
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
