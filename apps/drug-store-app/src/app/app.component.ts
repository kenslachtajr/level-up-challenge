import { Component } from '@angular/core';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Drug Store';
  links = [
    { path: '/login', icon: 'person', label: 'Login' },
    { path: '/drug-store', icon: 'loyalty', label: 'Drug-Store' }
  ]
}
