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
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresService } from './service/lugares.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { NuevoLugarComponent } from './nuevoLugar/nuevoLugar.component';


const appRoutes : Routes = [ 
  { path : '' , component : LugaresComponent },
  { path : 'lugares' , component : LugaresComponent },
  { path : 'detalle/:id' , component : DetalleComponent },
  { path : 'contacto' , component : ContactoComponent },
  { path : 'nuevo' , component : NuevoLugarComponent },

];
@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
   LugaresComponent,
   ContactoComponent,
   NuevoLugarComponent,
    ResaltarDirectiva,
    ContarClicksDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)  ,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCPoZ87fQAyXWN9mEudB9OaZ7E7RBlwvyw'
    }),
     RouterModule.forRoot(appRoutes)
   
  ],
  providers: [ LugaresService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
