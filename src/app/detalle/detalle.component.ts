import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../service/lugares.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
  
})
export class DetalleComponent {
  
  lugar: any = ''


 constructor(private route:ActivatedRoute , private ls : LugaresService ){
   
   let id = this.route.snapshot.params['id']
   this.lugar = ls.buscarPorId(id)
  } 




}
