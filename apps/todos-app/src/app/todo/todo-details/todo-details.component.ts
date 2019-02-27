import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '@workspace/core-data';

@Component({
  selector: 'workspace-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent {
  currentTodo: Todo;
  @Input() set selectTodo(value: Todo) {
    this.currentTodo = Object.assign({}, value);
  }
  @Output() cancelled = new EventEmitter();
}
