import { Injectable } from "@angular/core";

@Injectable()

export class LugaresService{

    lugares:any = [
        { id: 1 , plan : 'pagado' , cercania: 1, distancia: 1,    active: true ,  nombre : 'Floreria la Gardenia'},
        { id: 2 , plan : 'gratis' , cercania: 1, distancia: 1.8,  active: false , nombre : 'Donas la Pasadita'},
        { id: 3 , plan : 'gratis' , cercania: 2, distancia: 5,    active: true ,  nombre : 'Veterinaria UNEFA'},
        { id: 4 , plan : 'gratis' , cercania: 3, distancia: 10,   active: true ,  nombre : 'Peluqueria UNEFA'},
        { id: 5 , plan : 'pagado' , cercania: 3, distancia: 35,   active: true ,  nombre : 'Confiteria UNEFA'},
        { id: 6 , plan : 'gratis' , cercania: 2, distancia: 120,  active: true ,  nombre : 'Planta Industrial UNEFA'}
      ];

      get(){

        return this.lugares;
      }
  
      
}
