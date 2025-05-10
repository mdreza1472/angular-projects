import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlphabets]'
})
export class AlphabetsDirective {


  constructor(
    private elementRef : ElementRef
  ) { }

  @HostListener('keydown', ['$event'])
  onKeyPressEvent(keyEvent : KeyboardEvent) {
    console.log(keyEvent);
    //the key code can be checked and prevent the typing accordingly
    keyEvent.preventDefault();
  }

}
