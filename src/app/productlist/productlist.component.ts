import { Component } from '@angular/core';
import { PostcardComponent } from '../postcard/postcard.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ProductServiceService } from '../service/product-service.service';
import { Producto } from '../model/product.model';
import { RouterModule, Route, Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  imports: [PostcardComponent, FormsModule, CommonModule, RouterModule],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
  list: Producto[] = [];
  carrito: {producto: Producto, cantidad: number}[] = [];
  constructor(private productService: ProductServiceService, private router:Router){
    //this.list
    productService.getProducts().subscribe(
          response => {
            this.list = response.products.map(product => {
              return {
                id: product.id,
                mensaje: product.title,
                precio: product.price
              }
            });
          }
        );
  }
  seagregoalcarrito(producto:Producto){
    alert('Se agrego al carrito el siguiente producto:  ' +producto.mensaje);
    //find if the product is already in the cart and increase the quantity if not insert
    let item = this.carrito.find(item => item.producto.id == producto.id);
    if(item){
      item.cantidad++;
    }
    else{
      this.carrito.push({producto:producto, cantidad:1});
    }
  }
  
  goToDetail(producto:Producto){
    console.log('Go to detail',producto);
    this.router.navigate(['/producto',producto.id]);
  }


}
