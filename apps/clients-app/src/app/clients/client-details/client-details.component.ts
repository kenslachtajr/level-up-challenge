import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Client } from '@workspace/core-data';

@Component({
  selector: 'workspace-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent {
  currentClient: Client;
  @Input()
  set selectClient(value: Client) {
    this.currentClient = Object.assign({}, value);
  }
  @Output() cancelled = new EventEmitter();
  @Output() saved = new EventEmitter();
}
