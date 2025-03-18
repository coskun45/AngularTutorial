import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
  <a routerLink="home" routerLinkActive="active">Home</a> | 
  <a routerLink="about" routerLinkActive="active">About</a> | 
  <a routerLink="contact" routerLinkActive="active">Contact</a>  
<hr>
  <router-outlet></router-outlet>

    `,
  styles: [".active{color:red}"]
  
})
export class AppComponent {
  title = 'proj1';
}
