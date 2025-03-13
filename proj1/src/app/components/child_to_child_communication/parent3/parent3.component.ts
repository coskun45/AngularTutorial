import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent3',
  template: `
 <div style="background-color: aqua;">

 <p>Parent3 komponent</p>

<app-childa3 (data)="childEvent($event)"></app-childa3> <br>

<app-childb3 [data]="childA2MessageFromParent"></app-childb3>


 </div>

      
  
  `
})
export class Parent3Component implements OnInit {
  childA2MessageFromParent:string
  childEvent(obj:any){
    console.log(obj)
    this.childA2MessageFromParent=obj
  }

  constructor() { }

  ngOnInit() {
  }

}
