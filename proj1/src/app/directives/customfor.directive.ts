import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomfor]'
})
export class CustomforDirective {

  constructor( private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

  @Input() set appCustomfor(value:number){
    for(let i =0; i<value; i++)
      this.viewContainerRef.createEmbeddedView(this.templateRef,{index:i })
  }

}
