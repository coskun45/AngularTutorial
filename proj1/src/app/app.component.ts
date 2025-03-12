import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
    <!-- ngfor directive -->
    <ul>
      <li *ngFor="let item of names; 
      let index = index;
      let first = first;
      let last = last;
      let odd = odd;
      let even = even;

      
      ">
      
      {{index}}-{{item}}</li>
    </ul>

    <!-- ngif directive -->
    <div *ngIf="names.length > 30; else elseBlock">
  <h1>There are more than 3 names</h1>
</div>
<ng-template #elseBlock>
  <h1>There are 3 or fewer names</h1>
</ng-template>

<!-- ngswitch directive -->
<div [ngSwitch]="names.length">
  <div *ngSwitchCase="1">One</div>
  <div *ngSwitchCase="2">Two</div>
  <div *ngSwitchCase="3">Three</div>
  <div *ngSwitchCase="4">Four</div>
  <div *ngSwitchCase="5">Five</div>
  <div *ngSwitchDefault>More than five</div>
</div>

<!-- ngstyle directive -->
<div [ngStyle]="{'font-style': styleExp ? 'italic' : 'normal'}">This is italic</div>
<button (click)="styleExp = !styleExp">Toggle style</button>  


     
    
    `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  names: string[] = ['John', 'Doe', 'Smith', 'Brown', 'Johnson', 'ali'];
}
