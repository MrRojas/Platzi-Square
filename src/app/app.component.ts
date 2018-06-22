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
    {active: true , nombre : 'Floreria la Gardenia'},
    {active: false , nombre : 'Donas la Pasadita'},
    {active: true , nombre : 'Veterinaria UNEFA'}
  ];

  lat: number = 9.3278518;
  lng: number = -69.1223535;

}
