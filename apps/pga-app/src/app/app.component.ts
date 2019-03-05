import { Component } from '@angular/core';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Top PGA Golfers';
  links = [
    { path: '/login', icon: 'person', label: 'Login' },
    { path: '/golfers', icon: 'loyalty', label: 'Golfers' }
  ]
}
