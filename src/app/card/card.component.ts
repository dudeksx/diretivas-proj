import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  produtos: string[] = [];
  menuType: string = 'rootuser';

  constructor() {
    this.produtos = ['mouse', 'teclado', 'monitor'];
  }

  ngOnInit(): void {}

  // Esse evento adiciona sempre uma string "usuário" ao final do array
  adicionar() {
    this.produtos.push('Usuário');
  }
  // Esse evento remove o item que você clicar em cima.
  remover(index: number) {
    this.produtos.splice(index, 1);
  }
}
