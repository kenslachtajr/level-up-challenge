import { Component } from '@angular/core';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Famous Painters';
  links = [
    { path: '/login', icon: 'person', label: 'Login' },
    { path: '/painters', icon: 'loyalty', label: 'Painters' }
  ]
}
