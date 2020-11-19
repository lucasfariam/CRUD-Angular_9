import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  // definição de um produto 
  product: Product= {
    name: '',
    price: null
  }
  
  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    
  }
  // alerta que é exibido de produto salvo com sucesso
  createProduct(): void{
    // passando o produto como parametro pro create // metodo subscribe sou notificado quando a resposta chegar
    this.productService.create(this.product).subscribe( () => {
      this.productService.showMenssage('Produto criado!')
      this.router.navigate(['/products'])
    })
  }
  // função do botao de cancelar ele volta pra rota de produto
  cancel(): void{
    this.router.navigate(['/products'])
  }
}
