import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreDataModule } from '@workspace/core-data';
import { MaterialModule } from '@workspace/material';
import { UiToolbarModule } from '@workspace/ui-toolbar';
import { UiLoginModule } from '@workspace/ui-login';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AlbumsListComponent } from './albums/albums-list/albums-list.component';
import { AlbumDetailsComponent } from './albums/album-details/album-details.component';
import { LoginComponent } from './login/login.component';
import { AlbumsComponent } from './albums/albums.component';
import { RoutingModule } from './routing.module';
import { CoreStateModule } from '@workspace/core-state';

@NgModule({
  declarations: [
    AppComponent, 
    AlbumsListComponent, 
    AlbumDetailsComponent, 
    LoginComponent, 
    AlbumsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiToolbarModule,
    UiLoginModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
