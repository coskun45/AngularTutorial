import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent2',
  template:`
  <p>Parent2Component</p>

  <app-child2 (dataEvent)="childEvent($event)"></app-child2>
  
  `
})
export class Parent2Component implements OnInit {
  childEvent(obj:any){

    console.log(obj)

  }

  constructor() { }

  ngOnInit() {
  }

}
