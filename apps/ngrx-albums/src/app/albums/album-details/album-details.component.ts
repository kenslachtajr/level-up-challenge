import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Album } from '@workspace/core-data';

@Component({
  selector: 'workspace-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent {
  @Input() group: FormGroup;
  @Output() saved = new EventEmitter();
  @Output() canceled = new EventEmitter();

  saveAlbum(album: Album) {
    this.saved.emit(album);
  }

  cancel() {
    this.canceled.emit();
  }
}
