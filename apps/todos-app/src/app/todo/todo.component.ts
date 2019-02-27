import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, TodoService } from '@workspace/core-data';

@Component({
  selector: 'workspace-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todo$: Observable<Todo>;
  todos$: Observable<Todo[]>;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todos$ = this.todoService.get();
  }
}
