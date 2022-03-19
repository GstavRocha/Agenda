
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
   nome:string;
   telefone:string;
   email:string;
   data:string;
   comentario:string;

  constructor() { }

  ngOnInit(): void {
  }

}
