import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
    <h1>{{title}}</h1> <!-- text interpolation -->
    <input type="text" [value]="title" /> <!-- property binding -->

    <app-home [pageName]="title"></app-home>

    <button (click)="buttonClick()">Test Button</button> <!-- event binding -->
    <br>
   <!-- two way binding -->
    <input type="text" [(ngModel)]="name" (ngModelChange)="onChange($event)"/> <br>
    <input type="text" [(ngModel)]="name" /> <br>
    <p>{{name}}</p>


     
    
    `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Eyüp Coskun';
  name: string;

  buttonClick(){
    alert('Button clicked');
  }

  onChange(event){
    console.log(event);
  }
}
