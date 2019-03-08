import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Color } from '@workspace/core-data';
@Component({
  selector: 'workspace-colors-details',
  templateUrl: './colors-details.component.html',
  styleUrls: ['./colors-details.component.scss']
})
export class ColorsDetailsComponent {
  currentColor: Color;
  @Input() group: FormGroup;

  @Input()
  set selectColor(value: Color) {
    this.currentColor = Object.assign({}, value);
  }
  @Output() cancelled = new EventEmitter();
  @Output() saved = new EventEmitter();
}
