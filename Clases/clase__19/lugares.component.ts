import { Component } from '@angular/core';
import { LugaresService } from '../service/lugares.service';



@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['../app.component.css']
  
})


export class LugaresComponent {

	  // array que acepta todo tipo de objecto 
  lugares = null; 

  lat: number = 9.3278518;
  lng: number = -69.1223535;

  constructor(private l:LugaresService){

    this.lugares = l.get()
  }  
}
