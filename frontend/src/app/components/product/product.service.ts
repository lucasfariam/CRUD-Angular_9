import { map, catchError } from 'rxjs/operators';
import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
 
@Injectable({
  // classe que tem apenas uma unica instancia, nivel de aplicação
  providedIn: 'root'
})
export class ProductService {
 
  baseUrl = "http://localhost:3001/products"  // url passada do backend

  constructor(private snackBar:MatSnackBar,
    private http: HttpClient) { }

  showMenssage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }
  // criar um produto no backend        
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe( // esse pipe retorna um observable a partir do MAP abaixo
      map((obj) => obj), // recebe um obj e retorna ele msm 
      catchError( e => this.errorHandler(e)) // caso aconteça um erro na chamada do POST ele cai nesse CatchError
    )
  }
 

  // retorna um array de produtos, em um Obsevable no tipo get retorno
  read(): Observable<Product[]> {
      return this.http.get<Product[]>(this.baseUrl).pipe( 
        map((obj) => obj), 
        catchError( e => this.errorHandler(e)) 
      )   
  }
  // metodo para ler por ID
  readById(id: string): Observable<Product> {
      const url = ` ${this.baseUrl}/${id} `
      return this.http.get<Product>(url).pipe( 
        map((obj) => obj), 
        catchError( e => this.errorHandler(e)) 
      )
  } 
  // metodo que ira atualizar o fomulario
   update(product: Product): Observable<Product> {
      const url = ` ${this.baseUrl}/${product.id} `
      return this.http.put<Product>(url, product).pipe( 
        map((obj) => obj), 
        catchError( e => this.errorHandler(e)) 
      )
   }
   // metodo que deleta pelo id
   delete(id: number): Observable<Product> {
    const url = ` ${this.baseUrl}/${id} `
     return this.http.delete<Product>(url).pipe( 
      map((obj) => obj), 
      catchError( e => this.errorHandler(e)) 
    )
   }
    // Caindo no catch ele retorna essa função metodo abaixo de erro o ERRORHANDLER*
  errorHandler(e: any): Observable<any> { 
    this.showMenssage('Ocorreu um ERRO!', true) // mostra a msg e retorna o obj abaixo vazio
    return EMPTY // retorna um observable vazio
  }
}
