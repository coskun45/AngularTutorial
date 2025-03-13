import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
  <form #frm="ngForm" (ngSubmit)="onSubmit(frm.value)"> 
    <input type="text" name="name" placeholder="Name" ngModel> <br>
    <input type="text" name= "surname" placeholder="SurName" ngModel><br>
    <input type="email" name= "email" placeholder="Email" ngModel><br>
    <input type="tel" name="tel" placeholder="Tel" ngModel><br>

    <div ngModelGroup="address">
      <input type="text" name="country" placeholder="Country" ngModel><br>
      <input type="text" name="city" placeholder="City" ngModel><br>
      <input type="text" name="address" placeholder="Address" ngModel><br>
    </div>

    <button>Send</button>
  </form>


     
    
    `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('frm', {static: true }) frm: NgForm;

  onSubmit(data){
   //console.log(data)
   console.log(`Value : ${this.frm.value}`);
   console.log(`Valid : ${this.frm.valid}`);
   console.log(`Touched : ${this.frm.touched}`);
   console.log(`Submitted : ${this.frm.submitted}`);

   console.log(data)

  }

}
