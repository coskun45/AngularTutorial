import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
  <div *appCustomif="false">Merhaba</div>

  <ul>
    <li *appCustomfor="5">Eyüp</li>
  </ul>


     
    
    `
})
export class AppComponent {
  title = 'proj1';
}
