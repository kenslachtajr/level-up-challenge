import { Component } from '@angular/core';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todos-app';
  links = [
    { path: '/login', icon: 'person', label: 'Login' },
    { path: '/todos', icon: 'loyalty', label: 'Todos' }
  ]
}
