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
import { LiteratureComponent } from './literature/literature.component';
import { LiteratureDetailsComponent } from './literature/literature-details/literature-details.component';
import { LiteratureListComponent } from './literature/literature-list/literature-list.component';
import { CoreStateModule } from '@workspace/core-state';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LiteratureComponent,
    LiteratureDetailsComponent,
    LiteratureListComponent
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
