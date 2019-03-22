import { Component } from '@angular/core';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ten Largest US Cities';
  links = [
    { path: '/login', icon: 'person', label: 'Login' },
    { path: '/cities', icon: 'loyalty', label: 'Cities' }
  ]
}
