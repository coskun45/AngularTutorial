import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  template: `
  <p>Child2Component</p>
  
  `,
})
export class Child2Component implements OnInit {

 @Output() dataEvent: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {
    this.dataEvent.emit({message:"merhabe from child2"})
  }

}
