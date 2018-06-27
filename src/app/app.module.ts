import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

// componentes 
import { AppComponent } from './app.component';

import { DetalleComponent } from './detalle/detalle.component';

import { LugaresComponent} from './lugares/lugares.component';

// google maps

import { AgmCoreModule } from '@agm/core';

// directiva 
import { ResaltarDirectiva } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { Routes , RouterModule } from '@angular/router';

const appRoutes : Routes = [ 
  { path : '' , component : LugaresComponent },
  { path : 'lugares' , component : LugaresComponent },
  { path : 'detalle/:id' , component : DetalleComponent },

];
@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
   LugaresComponent,

    ResaltarDirectiva,
    ContarClicksDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCPoZ87fQAyXWN9mEudB9OaZ7E7RBlwvyw'
    }),
     RouterModule.forRoot(appRoutes)
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
