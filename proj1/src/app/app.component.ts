import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { capitalLetterVAlidator, capitalLetterVAlidatorWithParameter } from './validators/func';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
  <form [formGroup]="frm" (ngSubmit)="onSubmit()">

    <input type="text" placeholder="Name" formControlName="name">
    <div *ngIf="!name.valid && (name.dirty|| name.touched)"></div>
    {{name.errors | json}}
<br>
    <input type="text" placeholder="Surname" formControlName="surname">
    <div *ngIf="!surname.valid && (surname.dirty|| surname.touched)"></div>
    {{surname.errors | json}}

<br>
    <input type="text" placeholder="Email" formControlName="email">
    <div *ngIf="!email.valid && (email.dirty|| email.touched)"></div>
    {{email.errors | json}}

<br>
    
    <button>Submit</button>
  </form>
  
    
    `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  frm:FormGroup;
  constructor(private formBuilder:FormBuilder){
    this.frm = formBuilder.group({
      name:["", [Validators.required, Validators.minLength(3), capitalLetterVAlidator]],
      surname:["", [Validators.required, capitalLetterVAlidatorWithParameter(3)]],
      email:["",[Validators.required, Validators.email]]
    })
    this.frm.valueChanges.subscribe({
      next:data =>{
        console.log(data)
      }
    })
  }


  get name(){
    return this.frm.get("name");
  }

  get surname(){
    return this.frm.get("surname");
  }

  get email(){
    return this.frm.get("email");
  }

  onSubmit(){
    console.log(this.frm.value)
    console.log(this.frm.valid)
  }
  
}
