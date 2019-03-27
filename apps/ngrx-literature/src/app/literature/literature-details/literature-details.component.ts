import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Literature } from '@workspace/core-data';

@Component({
  selector: 'workspace-literature-details',
  templateUrl: './literature-details.component.html',
  styleUrls: ['./literature-details.component.scss']
})
export class LiteratureDetailsComponent {
  @Input() group: FormGroup;
  @Output() cancelled = new EventEmitter();
  @Output() saved = new EventEmitter();

  saveLiterature(literature: Literature) {
    this.saved.emit(literature);
  }

  cancel() {
    this.cancelled.emit();
  }
}
