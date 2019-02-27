import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo.model';

const BASE_URL = 'https://levelup-json-app.herokuapp.com/todos';
const model = 'todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get(this.getForUrl());
  }

  create(todo: Todo) {  
    return this.http.post(this.getForUrl(), todo);
  }

  update(todo: Todo) {
    return this.http.patch(this.getForUrlId(todo.id), todo);
  }

  delete(todoId: number) {
    return this.http.delete(this.getForUrlId(todoId));
  }
  
  private getForUrl() {
    return `{$BASE_URL}${model}`;
  }

  private getForUrlId(id: number) {
    return `${this.getForUrl}/${id}`;
  }
}
