import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PgaComponent } from './pga/pga.component';
import { PgaListComponent } from './page/pga-list/pga-list.component';
import { PgaDetailComponent } from './pga/pga-detail/pga-detail.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, PgaComponent, PgaListComponent, PgaDetailComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
