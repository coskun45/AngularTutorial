import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childa3',
  template:`
  <p>ChildA3 komponent</p>
  `
})
export class Childa3Component implements OnInit {
  @Output() data: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.data.emit("child A 2 ' den gelen veri")
  }

}
