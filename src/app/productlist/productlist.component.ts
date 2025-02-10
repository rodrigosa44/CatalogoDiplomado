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
  carrito: Producto[] = [];
  constructor(private productService: ProductServiceService, private router:Router){
    productService.getProducts().subscribe(productos=>this.list=productos);
  }
  seagregoalcarrito(producto:Producto){
    alert('Se agrego al carrito el siguiente producto:  ' +producto.mensaje);
    this.carrito.push(producto);
  }
  
  goToDetail(producto:Producto){
    console.log('Go to detail',producto);
    this.router.navigate(['/producto',producto.id]);
  }


}
