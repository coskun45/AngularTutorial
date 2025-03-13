import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-childb3',
  template:`
  <p>ChildB3 komponent:
    {{data}}
  </p>


  
  `
})
export class Childb3Component implements OnInit {

  @Input() data:any;

  constructor() { }

  ngOnInit() {
  }

}
