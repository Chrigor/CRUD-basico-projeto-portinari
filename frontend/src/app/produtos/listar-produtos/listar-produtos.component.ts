import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  title: string;

  constructor() {
    this.title = "Listar";
  }

  ngOnInit() {
  }

}
