import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DrugStoreComponent } from './drug-store/drug-store.component';
import { DrugStoreListComponent } from './drug-store/drug-store-list/drug-store-list.component';
import { DrugStoreDetailsComponent } from './drug-store/drug-store-details/drug-store-details.component';

@NgModule({
  declarations: [AppComponent, DrugStoreComponent, DrugStoreListComponent, DrugStoreDetailsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
