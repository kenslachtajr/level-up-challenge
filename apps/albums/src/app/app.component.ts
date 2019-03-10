import { Component } from '@angular/core';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Top Jazz Albums';
  links = [
    { path: '/login', icon: 'person', label: 'Login' },
    { path: '/albums', icon: 'loyalty', label: 'Albums' }
  ]
}

