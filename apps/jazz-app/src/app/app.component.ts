import { Component } from '@angular/core';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Jazz-App';
  links = [
    { path: '/login', icon: 'person', label: 'Login' },
    { path: '/musicians', icon: 'loyalty', label: 'Musicians' }
  ]
}
