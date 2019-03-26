import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Painter } from '@workspace/core-data';

@Component({
  selector: 'workspace-painters-list',
  templateUrl: './painters-list.component.html',
  styleUrls: ['./painters-list.component.scss']
})
export class PaintersListComponent {
  @Input() painters: Painter[];
  @Input() isLoading: boolean;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  selectPainter(painter: Painter) {
    this.selected.emit(painter);
  }

  deletePainter(painter: Painter) {
    this.deleted.emit(painter);
  }
}
