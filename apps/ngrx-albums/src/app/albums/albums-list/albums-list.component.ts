import { Component, Input } from '@angular/core';
import { Album } from '@workspace/core-data';

@Component({
  selector: 'workspace-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent {
  @Input() albums: Album[];
  @Input() isLoading: boolean;
}
