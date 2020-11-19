import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product

  constructor(
     private productService: ProductService,
     private router: Router,
     private route: ActivatedRoute
     ) { }

  // pega os valores preenchido quando clicar no icone de atualizar, pelas rotas e 'paramMap'
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') // pegar o parametro que veio do ID
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  // metodo que atualiza o produto com requisiçao put pro backend
  updateProduct(): void { // abaixo ele passa como parametro o produto
    this.productService.update(this.product).subscribe(() => { // fazer a alteração
        this.productService.showMenssage('Produto atualizado com sucesso!!') // retorna msg de sucesso apos atualizar o produto
        this.router.navigate(['/products']) 
    })
  }
  //volta pra tela de produto
  cancel(): void {
    this.router.navigate(['/products'])
  }
}
