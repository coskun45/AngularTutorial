import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  //templateUrl: './home.component.html',
  template: `
  <h1>{{pageName}}</h1>
    `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() pageName:string;
  constructor() { }

  ngOnInit() {
  }

}
