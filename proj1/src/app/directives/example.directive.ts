import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';
declare var $: any;
@Directive({
  selector: '[appExample]'
})
export class ExampleDirective implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.element.nativeElement.style.color = this.color;
    $(this.element.nativeElement).fadeOut(2000).fadeIn(2000);
  }

  @Input() color:string;

  @HostListener('click')
  onClick(){
    alert('Directive Clicked');
  }
    
  @HostBinding('style.backgroundColor')
  bgColor:string = 'yellow';
}


