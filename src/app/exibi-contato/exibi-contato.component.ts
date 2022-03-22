import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../Model/usuario.service';

@Component({
  selector: 'app-exibi-contato',
  templateUrl: './exibi-contato.component.html',
  styleUrls: ['./exibi-contato.component.css']
})
export class ExibiContatoComponent implements OnInit {

  constructor( private contatoServi: UsuarioService ) { }
  nomes:string [];
  ngOnInit(): void {
    this.nomes = this.contatoServi.getContato();
  }

}
