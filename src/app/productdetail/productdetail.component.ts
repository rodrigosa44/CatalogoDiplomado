import { Component } from '@angular/core';
import { Producto } from '../model/product.model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductServiceService } from '../service/product-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-productdetail',
  imports: [RouterModule, CommonModule],
  templateUrl: './productdetail.component.html',
  styleUrl: './productdetail.component.css'
})
export class ProductdetailComponent {
  producto: Producto | undefined;

  constructor (private router:Router, private activeroute:ActivatedRoute, private productservice:ProductServiceService){
    const id = Number(this.activeroute.snapshot.paramMap.get('id'));
    this.productservice.getProductById(id).subscribe(apiProducto => this.producto = {
      id: apiProducto.id,
      mensaje: apiProducto.title,
      precio: apiProducto.price
    });
  }

  goToList(){
    //this.router.navigate(['/productlist']);
    window.history.back();
  }
}
