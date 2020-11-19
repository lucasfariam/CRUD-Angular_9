import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
// importando a rota ^

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  // criando rota para o botão
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
    // quando clicar no botao, ele navega para a tela de novo produto, CLICK DO EVENTO EVENT BINDINGS
  }
}
