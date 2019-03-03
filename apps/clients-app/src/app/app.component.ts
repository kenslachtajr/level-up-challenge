import { Component } from '@angular/core';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Clients Applications';
  links = [
    { path: '/login', icon: 'person', label: 'Login' },
    { path: '/clients', icon: 'loyalty', label: 'Clients' }
  ]
}
