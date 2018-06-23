import { Directive , HostListener } from '@angular/core';

@Directive({
  selector: 'a[contar-clicks]'
})
export class ContarClicksDirective {
 
 click = 0; 
 @HostListener('click'  ) onClick(btn){

 	alert(this.click++);
 	
 }
  constructor() { }

}