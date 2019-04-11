import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StarWarsComponent } from './star-wars/star-wars.component';
import { LoginComponent } from './login/login.component';
import { StarWarsDetailsComponent } from './star-wars/star-wars-details/star-wars-details.component';
import { StarWarsListComponent } from './star-wars/star-wars-list/star-wars-list.component';

@NgModule({
  declarations: [AppComponent, StarWarsComponent, LoginComponent, StarWarsDetailsComponent, StarWarsListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
