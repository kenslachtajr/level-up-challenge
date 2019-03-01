import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Pizza } from '@workspace/core-data';

@Component({
  selector: 'workspace-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.scss']
})
export class PizzaDetailsComponent {
  currentPizza: Pizza;
  @Input() set selectPizza(value: Pizza) {
    this.currentPizza = Object.assign({}, value);
  }
  @Output() cancelled = new EventEmitter();
  @Output() saved = new EventEmitter();
}
