import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, onErrorResumeNext } from 'rxjs/operators';
import { DataPersistence } from '@nrwl/nx';

import { Album, AlbumsService } from '@workspace/core-data';
import { LoadAlbums, AlbumsActionTypes, AlbumsLoaded } from './albums.actions';
import { AlbumsState } from './albums.reducer';

@Injectable({ providedIn: 'root' })
export class AlbumsEffects {

  @Effect()
  loadAlbums$ = this.dataPersistence.fetch(AlbumsActionTypes.LoadAlbums, {
    run: (action: LoadAlbums, state: AlbumsState) => {
        this.albumsService.get().pipe(map((res: Album[]) => new AlbumsLoaded(res)));
    },

    onError: (action: LoadAlbums, error) => {
      console.error('error', error);
    }
  });
  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<AlbumsState>,
    private albumsService: AlbumsService
  ) {}
}
