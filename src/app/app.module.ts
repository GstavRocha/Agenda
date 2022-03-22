import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { UsuarioService } from './Model/usuario.service';

import { FormularioComponent } from './formulario/formulario.component';
import { DadosComponent } from './dados/dados.component';
import { ExibiContatoComponent } from './exibi-contato/exibi-contato.component';



@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    DadosComponent,
    ExibiContatoComponent,
   ],
  imports: [
    BrowserModule]
  ,
  providers: [ UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
