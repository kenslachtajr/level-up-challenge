import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '@workspace/core-data';

@Component({
  selector: 'workspace-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() todos: Todo[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
