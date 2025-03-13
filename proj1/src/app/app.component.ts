import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
  <form [formGroup]="frm" (ngSubmit)="onSubmit()">
    <input type="text" placeholder="Name" formControlName="name"><br>
    <input type="text" placeholder="Surname" formControlName="surname"><br>
    <input type="text" placeholder="Email" formControlName="email"><br>
    <input type="text" placeholder="Tel" formControlName="tel"><br>

    <div formGroupName="address">
    <input type="text" placeholder="Country" formControlName="country"><br>
    <input type="text" placeholder="City" formControlName="city"><br>
    <input type="text" placeholder="Adress" formControlName="address"><br>

    </div>
    <button>Send</button>
  </form>
  <button (click)="ok()">Ok</button>

     Valid: {{frm.valid}}
    
    `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  frm:FormGroup;
  constructor(private formBuilder:FormBuilder){
    this.frm = formBuilder.group({
      name:["", Validators.required],
      surname:[""],
      email:[""],
      tel:[""],

      address: formBuilder.group({
        country:[""],
        city:[""],
        adress:[""]
      })
    })
    this.frm.valueChanges.subscribe({
      next:data =>{
        console.log(data)
      }
    })
  }

  onSubmit(){
    console.log(this.frm.value)
  }
  ok(){
    this.frm.get('name').setValue("coskun",{onlySelf:true})
  }
}
