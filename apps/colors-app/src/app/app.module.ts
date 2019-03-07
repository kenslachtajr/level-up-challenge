import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ColorsComponent } from './colors/colors.component';
import { ColorsDetailsComponent } from './colors/colors-details/colors-details.component';
import { ColorsListComponent } from './colors/colors-list/colors-list.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, ColorsComponent, ColorsDetailsComponent, ColorsListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
