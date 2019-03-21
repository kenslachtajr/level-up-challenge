import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, onErrorResumeNext } from 'rxjs/operators';
import { DataPersistence } from '@nrwl/nx';

import { Album, AlbumsService } from '@workspace/core-data';
import { AlbumsActionTypes, AlbumsLoaded, CreateAlbum, UpdateAlbum, DeleteAlbum, LoadAlbums, AlbumUpdated, AlbumCreated, AlbumDeleted } from './albums.actions';
import { AlbumsState } from './albums.reducer';

@Injectable({ providedIn: 'root' })
export class AlbumsEffects {

  @Effect()
  loadAlbums$ = this.dataPersistence.fetch(AlbumsActionTypes.LoadAlbums, {
    run: (action: LoadAlbums, state: AlbumsState) => {
        return this.albumsService.get().pipe(map((res: Album[]) => new AlbumsLoaded(res)));
    },

    onError: (action: LoadAlbums, error) => {
      console.error('error', error);
    }
  });

  @Effect()
  createAlbum$ = this.dataPersistence.pessimisticUpdate(AlbumsActionTypes.CreateAlbum, {
    run: (action: CreateAlbum, state: AlbumsState) => {
        return this.albumsService.create(action.payload).pipe(map((res: Album) => new AlbumCreated(res)));
    },

    onError: (action: CreateAlbum, error) => {
      console.error('error', error);
    }
  });

  @Effect()
  udpateAlbum$ = this.dataPersistence.pessimisticUpdate(AlbumsActionTypes.UpdateAlbum, {
    run: (action: UpdateAlbum, state: AlbumsState) => {
        return this.albumsService.update(action.payload).pipe(map((res: Album) => new AlbumUpdated(res)));
    },

    onError: (action: UpdateAlbum, error) => {
      console.error('error', error);
    }
  });

  @Effect()
  deleteAlbum$ = this.dataPersistence.fetch(AlbumsActionTypes.DeleteAlbum, {
    run: (action: DeleteAlbum, state: AlbumsState) => {
        return this.albumsService.delete(action.payload.id).pipe(map((res: Album) => new AlbumDeleted(res)));
    },

    onError: (action: DeleteAlbum, error) => {
      console.error('error', error);
    }
  });
  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<AlbumsState>,
    private albumsService: AlbumsService
  ) {}
}
