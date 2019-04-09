import { Component } from '@angular/core';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pokemon Characters';
  links = [
    { path: './login', icon: 'person', label: 'Login' },
    { path: './pokemon', icon: 'loyalty', label: 'Pokemon' }
  ];
}
