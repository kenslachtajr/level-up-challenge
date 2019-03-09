import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Piano } from '@workspace/core-data';

@Component({
  selector: 'workspace-piano-brand-list',
  templateUrl: './piano-brands-list.component.html',
  styleUrls: ['./piano-brands-list.component.scss']
})
export class PianoBrandsListComponent {
@Input() piano: Piano[];
@Output() selected = new EventEmitter();
@Output() deleted = new EventEmitter();
}
