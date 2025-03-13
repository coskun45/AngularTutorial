import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <p style="background-color: red;">
  child works!
  {{childData}}

</p>
  `,
})
export class ChildComponent implements OnInit {

  @Input() childData: any;
  constructor() { }

  ngOnInit() {
  }

}
