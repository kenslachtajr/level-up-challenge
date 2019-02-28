import { Component } from '@angular/core';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Employees Application';
  links = [
    { path: '/login', icon: 'person', label: 'Login' },
    { path: '/employees', icon: 'loyalty', label: 'Employees' }
  ]
}
