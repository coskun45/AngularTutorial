import { Component } from '@angular/core';
import { ProductService } from './productservice';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
  <h1>{{title}}</h1>


     
    
    `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proj1';
  constructor(private productService:ProductService){
    console.log(productService.getProducts())
  }
}
