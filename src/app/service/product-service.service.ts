import { Injectable } from '@angular/core';
import { catchError, Observable, of, retry } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UrlMatchResult } from '@angular/router';
import { Producto } from '../model/product.model';
import { ApiResponse } from '../model/api_responses/api-response.model';
import { ApiProduct } from '../model/api_responses/api-product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private client: HttpClient){}

  private productos : Producto[] = [
    {id: 1, mensaje: 'Latte', precio: 20},
    {id: 2, mensaje: 'Americano', precio: 14},
    {id: 3, mensaje: 'Cappuccino', precio: 18},
  ]

  saveProduct(producto:Producto):Observable<Producto>{
    return of (this.productos[0]);
  }
  getProducts(skip: number = 0, search:string = ''): Observable<ApiResponse>{
    return this.client.get<ApiResponse>('https://dummyjson.com/products?limit=4&skip='+skip);
  }
  // getProductById(id:number): Observable<Producto|undefined>{
  //   return of(this.productos.find(producto=>producto.id==id));
  // }

  getProductById(id:number): Observable<ApiProduct>{
    return this.client.get<ApiProduct>('https://dummyjson.com/product/'+id);
  }
  updateProduct(producto:Producto): Observable<Producto>{
    return of(producto);
  }
  deleteProduct(id:number): Observable<boolean>{
    return of(true);
  }

}
