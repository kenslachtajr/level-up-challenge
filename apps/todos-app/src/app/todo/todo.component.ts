import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, TodoService } from '@workspace/core-data';

@Component({
  selector: 'workspace-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todo: Todo;
  todos$: Observable<Todo[]>;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getTodos();
  }

  selectTodo(todo: Todo) {
    this.todo = todo;
  }

  getTodos() {
    this.todos$ = this.todoService.get();
  }

  saveTodo(todo: Todo) {
    todo.id ? this.updateTodo(todo) : this.createTodo(todo);
  }

  createTodo(todo: Todo) {
    this.todoService.create(todo)
    .subscribe(res => {
      this.reset();
      this.getTodos();
    })
  }

  updateTodo(todo: Todo) {
    this.todoService.update(todo)
    .subscribe(res => {
      this.reset();
      this.getTodos();
    })
  }

  deleteTodo(todoId: number) {
    this.todoService.delete(todoId).subscribe(res => {
      this.reset();
      this.getTodos();
    });
  }

  reset() {
    const emptyTodo: Todo = {
      id: null,
      title: '',
      description: '',
      urgent: false,
      completed: false
    };
    this.selectTodo(emptyTodo);
  }
}
