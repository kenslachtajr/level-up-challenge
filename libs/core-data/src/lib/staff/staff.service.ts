import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Staff } from './staff.model';
import { Observable } from 'rxjs';

const BASE_URL = 'https://level-up-data.herokuapp.com/';
const model = 'staff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  constructor(private http: HttpClient) {}

  get(): Observable<Staff[]> {
    return this.http.get<Staff[]>(this.getForUrl());
  }

  create(staff: Staff): Observable<Staff> {
    return this.http.post<Staff>(this.getForUrl(), staff);
  }

  update(staff: Staff): Observable<Staff> {
    return this.http.patch<Staff>(this.getForUrlId(staff.id), staff);
  }

  delete(staffId: number): any {
    return this.http.delete<any>(this.getForUrlId(staffId));
  }

  private getForUrl() {
    return `${BASE_URL}${model}`;
  }

  private getForUrlId(id: number) {
    return `${this.getForUrl()}/${id}`;
  }
}
