import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from '@workspace/core-data';

@Component({
  selector: 'workspace-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent {
  @Input() albums: Album[];
  @Input() isLoading: boolean;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  selectAlbum(album: Album) {
    this.selected.emit(album);
  }

  deleteAlbum(album: Album) {
    this.deleted.emit(album);
  }
}
