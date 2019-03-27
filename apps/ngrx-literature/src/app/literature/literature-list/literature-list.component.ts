import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Literature } from '@workspace/core-data';

@Component({
  selector: 'workspace-literature-list',
  templateUrl: './literature-list.component.html',
  styleUrls: ['./literature-list.component.scss']
})
export class LiteratureListComponent {
  @Input() literatures: Literature[];
  @Input() isLoading: boolean;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  selectLiterature(literature: Literature) {
    this.selected.emit(literature);
  }

  deleteLiterature(literature: Literature) {
    this.deleted.emit(literature);
  }
}
