import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  // classe que tem apenas uma unica instancia, nivel de aplicação
  providedIn: 'root'
})
export class ProductService {
 
  baseUrl = "http://localhost:3001/products"  // url passada do backend

  constructor(private snackBar:MatSnackBar,
    private http: HttpClient) { }

  showMenssage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ['msg-success']
    })
  }
  // criar um produto no backend        
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }
  // retorna um array de produtos, em um Obsevable no tipo get retorno
  read(): Observable<Product[]> {
      return this.http.get<Product[]>(this.baseUrl)
  }
  // metodo para ler por ID
  readById(id: string): Observable<Product> {
      const url = ` ${this.baseUrl}/${id} `
      return this.http.get<Product>(url)
  } 
  // metodo que ira atualizar o fomulario
   update(product: Product): Observable<Product> {
      const url = ` ${this.baseUrl}/${product.id} `
      return this.http.put<Product>(url, product)
   }
   // metodo que deleta pelo id
   delete(id: number): Observable<Product> {
    const url = ` ${this.baseUrl}/${id} `
     return this.http.delete<Product>(url)
   }

}
