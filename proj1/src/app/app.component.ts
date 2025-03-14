import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `

<app-createuser></app-createuser>
<hr>
<app-readuser></app-readuser>

     
    
    `
})
export class AppComponent {
  title = 'proj1';
}
