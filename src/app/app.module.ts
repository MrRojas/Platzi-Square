import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCPoZ87fQAyXWN9mEudB9OaZ7E7RBlwvyw'
    })
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
