import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-createuser',
  template:`
  <input type="text" placeholder="Name" #txtName> <button (click)="userCreate(txtName.value); txtName.value=''">Create</button>
  `
})
export class CreateuserComponent implements OnInit {

  constructor(private userService: UserService) {}
  userCreate(name:string){
    this.userService.addUser(name)

  }

  ngOnInit() {
  }

}
