import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-readuser',
  template:`
  <ul>
    <li *ngFor="let name of userService.users">{{name}}</li>
  </ul>
  `
})
export class ReaduserComponent implements OnInit {

  constructor(public userService:UserService) { }

  ngOnInit() {
  }

}
