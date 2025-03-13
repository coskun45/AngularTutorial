import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-example',
  template:`
  <p>example</p> <br>
  <input type="text" [(ngModel)]="data"> <br>
  <ng-content></ng-content>
  
  
  `
})
export class ExampleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {
  ngOnDestroy(): void {
    console.log('8. ngOnDestroy');
    // Clean up any resources or subscriptions here
  }
  ngAfterViewChecked(): void {
    console.log('7. ngAfterViewChecked');
    // Add any logic that needs to run after the view has been checked here
  }
  ngAfterViewInit(): void {
    console.log('6. ngAfterViewInit');
    // Add any logic that needs to run after the view has been initialized here
  }
  ngAfterContentChecked(): void {
    console.log('5. ngAfterContentChecked');
    // Add any logic that needs to run after the content has been checked here
  }
  ngAfterContentInit(): void {
    console.log('4. ngAfterContentInit');
    // Add any logic that needs to run after content initialization here
  }


  ngDoCheck(): void {
    console.log('3. ngDoCheck');
    // Add custom change detection logic here
  }
  ngOnInit(): void {
    console.log('2.ngOnInit');
    // Add any initialization logic here
  }
  @Input() data:string;

  ngOnChanges(changes: SimpleChanges): void {
      console.log("1. ngOnChanges")
  }


 
}
