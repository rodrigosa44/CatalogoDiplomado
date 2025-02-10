import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UrlMatchResult } from '@angular/router';
import { Producto } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private productos : Producto[] = [
    {id: 1, mensaje: 'Latte', precio: 20},
    {id: 2, mensaje: 'Americano', precio: 14},
    {id: 3, mensaje: 'Cappuccino', precio: 18},
  ]

  saveProduct(producto:Producto):Observable<Producto>{
    return of (this.productos[0]);
  }
  getProducts(): Observable<Producto[]>{
    return of(this.productos);
  }
  getProductById(id:number): Observable<Producto|undefined>{
    return of(this.productos.find(producto=>producto.id==id));
  }
  updateProduct(producto:Producto): Observable<Producto>{
    return of(producto);
  }
  deleteProduct(id:number): Observable<boolean>{
    return of(true);
  }

}
