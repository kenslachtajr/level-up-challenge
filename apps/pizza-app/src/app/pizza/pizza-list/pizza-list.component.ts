import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pizza } from '@workspace/core-data';

@Component({
  selector: 'workspace-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent {
  @Input() pizzas: Pizza[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
