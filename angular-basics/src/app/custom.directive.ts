import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  @Input()
  appCustomDirectiveInput: string | undefined;

  constructor() { }

  @HostListener('mouseenter')
  onMouseEnter() {
    console.log(this.appCustomDirectiveInput);
  }

}
