import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Painter } from '@workspace/core-data';

@Component({
  selector: 'workspace-painters-details',
  templateUrl: './painters-details.component.html',
  styleUrls: ['./painters-details.component.scss']
})
export class PaintersDetailsComponent {
  @Input() group: FormGroup;
  @Output() cancelled = new EventEmitter();
  @Output() saved = new EventEmitter();

  savePainter(painter: Painter) {
    this.saved.emit(painter);
  }

  cancel() {
    this.cancelled.emit();
  }
}
