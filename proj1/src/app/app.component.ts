import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `

  <app-example data="merhaba"> Content</app-example>
     
    
    `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proj1';
}
