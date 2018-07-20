import { element } from 'protractor';
import { Endereco } from './../models/endereco.models';
import { AppService } from './../providers/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  enderecos: Array<Endereco>;
  endereco: Endereco = new Endereco();

  constructor(public service: AppService) { 
    service.get().subscribe(element => {
      console.log(element)
      this.enderecos = element
    });
  }

  metodo() {
    this.service.post(this.endereco)
  }

  ngOnInit() {
  }
  
}
