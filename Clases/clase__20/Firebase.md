# FireBase
### Es un servicio de Base de Datos y Rutas para diversas Tecnologias

## Para usar con angular...

### Paso 1 Crear una cuenta en firebase.google

https://firebase.google.com/?gclid=CjwKCAjws8vaBRBFEiwAQfhs-F0cpN4a9gwSccpEimfkQ0jiVKM5H36k_peaqCDiwWB_dgPtgezVixoC758QAvD_BwE

### Paso 2 Ir a la documentacion para instalarlo en nuestro proyecto angular 

https://github.com/angular/angularfire2


#### Como instalarlo en el proyecto
https://github.com/angular/angularfire2/blob/master/docs/install-and-setup.md


### Paso 3: Segun la documentacion Instalar el paquete npm 

npm install firebase angularfire2 --save

### Paso 4: Agregue la configuración de Firebase a la variable de entornos (enviroment)

Eso se realiza en la carpeta enviromente que se encuentra alojado en src, debe quedar asi 


export const environment = {
  production: false,
  firebase: {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
  }
};


### Paso 5: Configurar @NgModule para AngularFireModule

Desde /src/app/app.module.ts, inyecte los proveedores de Firebase y especifique su configuración de Firebase.

Debe quedar de la siguiente manera: 



import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';


#### Y en @ngModule debe quedar asi 


@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
   LugaresComponent,
   ContactoComponent,
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
 
     RouterModule.forRoot(appRoutes)
   
  ],
  providers: [ LugaresService  ],
  bootstrap: [AppComponent]
})


### Paso 6: Escribir los datos de la cuenta en firebase en el enviorement 