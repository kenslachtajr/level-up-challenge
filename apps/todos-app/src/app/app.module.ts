import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreDataModule } from '@workspace/core-data';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    CoreDataModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
