import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
  <p>
  parent works!
</p>
<app-child childData="ljdflasjfd"></app-child>
<app-child [childData]="data"></app-child>

  `
})
export class ParentComponent implements OnInit {

  data:string = "merhaba from parent"

  constructor() { }

  ngOnInit() {
  }

}
