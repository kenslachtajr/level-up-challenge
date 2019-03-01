import { Component } from '@angular/core';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The Pizza Shoppe';
  links = [
        { path: '/login', icon: 'person', label: 'Login' },
        { path: '/pizza', icon: 'loyalty', label: 'Pizza' }
      ]
}