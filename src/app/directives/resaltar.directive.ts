import {Directive , OnInit , ElementRef , Renderer2, Input} from '@angular/core'

@Directive({
	selector: '[resaltar]'
})

export class ResaltarDirectiva implements OnInit{
	
	@Input('resaltar') plan : string = ''



	constructor(private elRef: ElementRef , private renderer : Renderer2 ){}

	ngOnInit(){
		if (this.plan === 'pagado'){

			this.renderer.setStyle(this.elRef.nativeElement, 'background-color' , 'yellow')

		}
	}
}