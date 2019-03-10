import { Component } from '@angular/core';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Operas-App';
  links = [
    { path: '/login', icon: 'person', label: 'Login' },
    { path: '/operas', icon: 'loyalty', label: 'Operas' }
  ]
}
