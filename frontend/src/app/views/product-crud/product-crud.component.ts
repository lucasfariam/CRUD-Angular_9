import { HeaderService } from './../../components/template/header/header.service';
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
  constructor(private router: Router,
    private headerService: HeaderService) { // traz o nome no header da pagina que você esta navegando
      headerService.headerData = {
        title: 'Cadastro de Produto', // titulo da pagina
        icon: 'storefront', // icone
        routeUrl: '/products' // pagina de produtos URL
    }
   }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
    // quando clicar no botao, ele navega para a tela de novo produto, CLICK DO EVENTO EVENT BINDINGS
  }
}
