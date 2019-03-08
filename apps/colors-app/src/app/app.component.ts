import { Component } from '@angular/core';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Colors List';
  links = [
    { path: '/login', icon: 'person', label: 'Login' },
    { path: '/drug-store', icon: 'loyalty', label: 'Colors' }
  ]
}
