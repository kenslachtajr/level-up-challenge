import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employees.model';
import { Observable } from 'rxjs';

const BASE_URL = 'https://levelup-json-app.herokuapp.com/';
const model = 'employees';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  constructor(private http: HttpClient) {}

  get(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.getForUrl());
  }

  create(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.getForUrl(), employee);
  }

  update(employee: Employee): Observable<Employee> {
    return this.http.patch<Employee>(this.getForUrlId(employee.id), employee);
  }

  delete(employeeId: number): any {
    return this.http.delete<any>(this.getForUrlId(employeeId));
  }

  private getForUrl() {
    return `${BASE_URL}${model}`;
  }

  private getForUrlId(id: number) {
    return `${this.getForUrl()}/${id}`;
  }
}
