import { Component } from '@angular/core';
import { CustomPipe } from './pipes/custom.pipe';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
  <h1>{{title | uppercase}}</h1>

  {{ "bismillahirrahmenirrahim" | custom: 3:10}}
     
    
    `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private custom: CustomPipe){
   console.log(custom.transform("ladjflsdfjadfasf",3,10))
  }
  title = 'proj1';
}
