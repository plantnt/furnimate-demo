import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart-pages/cart/cart.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
{ path: '', component: CatalogComponent, title: 'Catalogo'},
{ path: 'producto', component: ProductComponent, title: 'Producto' },
{ path: 'carrito', component: CartComponent, title: 'Carrito'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
