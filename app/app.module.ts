import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Adicionar essa linha
import { AppComponent }   from './app.component';
@NgModule({
  imports:      [ BrowserModule ],
  //Adicionar essa linha
  declarations: [ AppComponent ],
  //Adicionar essa linha
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
