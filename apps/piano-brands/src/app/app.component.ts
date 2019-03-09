import { Component } from '@angular/core';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Piano Brands';
  links = [
    { path: '/login', icon: 'person', label: 'Login' },
    { path: '/piano-brands', icon: 'loyalty', label: 'Piano Brands' }
  ];
}
