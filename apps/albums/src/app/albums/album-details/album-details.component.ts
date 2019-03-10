import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from '@workspace/core-data';

@Component({
  selector: 'workspace-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent {
  currentAlbum: Album;
  @Input()
  set selectAlbum(value: Album) {
    this.currentAlbum = Object.assign({}, value);
  }
  @Output() cancelled = new EventEmitter();
  @Output() saved = new EventEmitter();
}
