import { Component } from '@angular/core';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Campaign Staff App';
  links = [
    { path: '/login', icon: 'person', label: 'Login' },
    { path: '/staff', icon: 'loyalty', label: 'Staff' }
  ]
}
