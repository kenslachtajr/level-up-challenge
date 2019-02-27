import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo.model';
import { Observable } from 'rxjs';

const BASE_URL = 'https://levelup-json-app.herokuapp.com/';
const model = 'todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) {}

  get(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.getForUrl());
  }

  create(todo: Todo): Observable<Todo> {  
    return this.http.post<Todo>(this.getForUrl(), todo);
  }

  update(todo: Todo): Observable<Todo> {
    return this.http.patch<Todo>(this.getForUrlId(todo.id), todo);
  }

  delete(todoId: number): any {
    return this.http.delete<any>(this.getForUrlId(todoId));
  }
  
  private getForUrl() {
    return `${BASE_URL}${model}`;
  }

  private getForUrlId(id: number) {
    return `${this.getForUrl}/${id}`;
  }
}
