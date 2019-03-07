import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Client } from '@workspace/core-data';

@Component({
  selector: 'workspace-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent {
  @Input() clients: Client[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
