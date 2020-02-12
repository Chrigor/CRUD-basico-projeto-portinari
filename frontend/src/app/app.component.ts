import { Component } from '@angular/core';

import { PoMenuItem } from '@portinari/portinari-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Listar produtos', link:'listarProdutos'},
    { label: 'Cadastrar Categoria', link:'cadastrarCategoria'},
    { label: 'Cadastrar Produto', link:'cadastrarProduto'}
  ];

}