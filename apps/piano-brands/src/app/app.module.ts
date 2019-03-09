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
import { PianoBrandsComponent } from './piano-brands/piano-brands.component';
import { PianoBrandsListComponent } from './piano-brands/piano-brands-list/piano-brands-list.component';
import { PianoBrandsDetailsComponent } from './piano-brands/piano-brands-details/piano-brands-details.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PianoBrandsComponent,
    PianoBrandsListComponent,
    PianoBrandsDetailsComponent
  ],
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
