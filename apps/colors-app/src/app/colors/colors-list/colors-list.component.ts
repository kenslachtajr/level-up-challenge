import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Color } from '@workspace/core-data';

@Component({
  selector: 'workspace-colors-list',
  templateUrl: './colors-list.component.html',
  styleUrls: ['./colors-list.component.scss']
})
export class ColorsListComponent {
  @Input() colors: Color[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
