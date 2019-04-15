import { Component } from '@angular/core';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Star Wars Characters';
  links = [
    { path: './login', icon: 'person', label: 'Login' },
    { path: './star-wars', icon: 'loyalty', label: 'Star Wars' }
  ];
}
