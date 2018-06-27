import { Directive , HostListener , HostBinding } from '@angular/core';

@Directive({
  selector: 'li[contar-clicks]'
})
export class ContarClicksDirective {
 
 click = 0; 

 @HostBinding('style.opacity') opacidad: number = .1; 

 @HostListener('click'  ) onClick(btn){

 	this.opacidad += .1;
 	
 }
  constructor() { }

}