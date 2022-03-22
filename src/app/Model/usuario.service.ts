import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  nomes:string[];


  constructor(){
      this.nomes = [];


  }
  adiciona(nome: string){
    if(nome != undefined && nome != " "){
      this.nomes.push(nome);
    }
  }

  getContato():string[]{
    return this.nomes;
  }

}

