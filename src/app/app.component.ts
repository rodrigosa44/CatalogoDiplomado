import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostcardComponent } from "./postcard/postcard.component";
import { ProductlistComponent } from './productlist/productlist.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Catalogo de productos';
  
}
