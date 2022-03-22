import { NgModule } from '@angular/core';

import { UsuarioService } from './../Model/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {
  nome: string[];
  novoNome: string;
  constructor(private contatoServi: UsuarioService) {
    this.novoNome= "";
  }

  ngOnInit(): void {
  }
  adicionar(){
    this.contatoServi.adiciona(this.novoNome);

  }

}
