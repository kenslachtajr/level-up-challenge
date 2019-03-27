import { Component } from '@angular/core';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Great Literature';
  links = [
    { path: './login', icon: 'person', label: 'Login' },
    { path: './literature', icon: 'loyalty', label: 'Literature' }
  ];
}
