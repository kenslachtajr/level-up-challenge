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
import { DrugStoreComponent } from './drug-store/drug-store.component';
import { DrugStoreListComponent } from './drug-store/drug-store-list/drug-store-list.component';
import { DrugStoreDetailsComponent } from './drug-store/drug-store-details/drug-store-details.component';

@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent, 
    DrugStoreComponent, 
    DrugStoreListComponent, 
    DrugStoreDetailsComponent, 
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
