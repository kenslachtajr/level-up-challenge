import { Component, OnInit } from '@angular/core';
import { AlbumsFacade } from '@workspace/core-state';
import { Observable } from 'rxjs';
import { Album } from '@workspace/core-data';

@Component({
  selector: 'workspace-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  albums$: Observable<Album[]> = this.albumsFacade.allAlbums$;
  loading$: Observable<boolean> = this.albumsFacade.albumsLoading$;

  constructor(private albumsFacade: AlbumsFacade) {}

  ngOnInit() {
    this.albumsFacade.loadAlbums();
  }
}
