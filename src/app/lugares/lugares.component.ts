import { Component } from '@angular/core';


@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['../app.component.css']
  
})
export class LugaresComponent {

	  // array que acepta todo tipo de objecto 
    lugares:any = [
      { id: 1 , plan : 'pagado' , cercania: 1, distancia: 1,    active: true ,  nombre : 'Floreria la Gardenia'},
      { id: 2 , plan : 'gratis' , cercania: 1, distancia: 1.8,  active: false , nombre : 'Donas la Pasadita'},
      { id: 3 , plan : 'gratis' , cercania: 2, distancia: 5,    active: true ,  nombre : 'Veterinaria UNEFA'},
      { id: 4 , plan : 'gratis' , cercania: 3, distancia: 10,   active: true ,  nombre : 'Peluqueria UNEFA'},
      { id: 5 , plan : 'pagado' , cercania: 3, distancia: 35,   active: true ,  nombre : 'Confiteria UNEFA'},
      { id: 6 , plan : 'gratis' , cercania: 2, distancia: 120,  active: true ,  nombre : 'Planta Industrial UNEFA'}
    ];

    


  lat: number = 9.3278518;
  lng: number = -69.1223535;

  
}
