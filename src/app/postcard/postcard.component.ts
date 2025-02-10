import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../model/product.model';

@Component({
  selector: 'app-postcard',
  imports: [],
  templateUrl: './postcard.component.html',
  styleUrl: './postcard.component.css'
})
export class PostcardComponent {
  @Input() producto: Producto={
    id:0,
    mensaje:'',
    precio:0
  }; 
 @Output() agregaralcarrito: EventEmitter<Producto> = new EventEmitter <Producto>();
 @Output() productSelected: EventEmitter<Producto> = new EventEmitter <Producto>();
 mcarrito: string = '';

 
 agregarcarrito() {
  this.agregaralcarrito.emit(this.producto);
  this.mcarrito = this.producto.mensaje;
}
selectProduct(){
  this.productSelected.emit(this.producto);
}

}
