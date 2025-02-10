import { Routes } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:'',component: ProductlistComponent},
    {path: 'productos', redirectTo : ''},
    {path: 'producto/:id', component:ProductdetailComponent},

];
