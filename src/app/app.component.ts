import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'PlatziSquare'; 

  // array que acepta todo tipo de objecto 
  lugares:any = [
    { plan : 'pagado' , cercania: 1, distancia: 1,    active: true ,  nombre : 'Floreria la Gardenia'},
    { plan : 'gratis' , cercania: 1, distancia: 1.8,  active: false , nombre : 'Donas la Pasadita'},
    { plan : 'gratis' , cercania: 2, distancia: 5,    active: true ,  nombre : 'Veterinaria UNEFA'},
    { plan : 'gratis' , cercania: 3, distancia: 10,   active: true ,  nombre : 'Peluqueria UNEFA'},
    { plan : 'pagado' , cercania: 3, distancia: 35,   active: true ,  nombre : 'Confiteria UNEFA'},
    { plan : 'gratis' , cercania: 2, distancia: 120,  active: true ,  nombre : 'Planta Industrial UNEFA'}
  ];

  lat: number = 9.3278518;
  lng: number = -69.1223535;

}
