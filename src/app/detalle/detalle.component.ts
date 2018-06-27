import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
  
})
export class DetalleComponent {
  
  lugar: any = ''


 constructor(private route:ActivatedRoute  ){
   
   let id = this.route.snapshot.params['id']
   this.lugar = this.getDetalle(id) 
  } 

  getDetalle( id ){
     return this.lugares.filter( (e) => e.id == id || null )[0]
  }

 lugares:any = [
  { id: 1 , plan : 'pagado' , cercania: 1, distancia: 1,    active: true ,  nombre : 'Floreria la Gardenia' , descripcion: 'No Disponible en estos momentos...' },
  { id: 2 , plan : 'gratis' , cercania: 1, distancia: 1.8,  active: false , nombre : 'Donas la Pasadita' , descripcion: 'No Disponible en estos momentos...' },
  { id: 3 , plan : 'gratis' , cercania: 2, distancia: 5,    active: true ,  nombre : 'Veterinaria UNEFA' , descripcion: 'No Disponible en estos momentos...' },
  { id: 4 , plan : 'gratis' , cercania: 3, distancia: 10,   active: true ,  nombre : 'Peluqueria UNEFA' , descripcion: 'No Disponible en estos momentos...' },
  { id: 5 , plan : 'pagado' , cercania: 3, distancia: 35,   active: true ,  nombre : 'Confiteria UNEFA' , descripcion: 'No Disponible en estos momentos...' },
  { id: 6 , plan : 'gratis' , cercania: 2, distancia: 120,  active: true ,  nombre : 'Planta Industrial UNEFA' , descripcion: 'No Disponible en estos momentos...' }
];
}
