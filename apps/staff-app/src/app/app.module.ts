import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoreDataModule } from '@workspace/core-data';
import { MaterialModule } from '@workspace/material';
import { UiToolbarModule } from '@workspace/ui-toolbar';
import { UiLoginModule } from '@workspace/ui-login';

import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { StaffComponent } from './staff/staff.component';
import { StaffListComponent } from './staff/staff-list/staff-list.component';
import { StaffDetailsComponent } from './staff/staff-details/staff-details.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, StaffComponent, StaffDetailsComponent, StaffListComponent, LoginComponent],
  imports: [
    BrowserModule, 
    FormsModule, 
    CoreDataModule, 
    MaterialModule, 
    UiToolbarModule, 
    UiLoginModule, 
    RoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
