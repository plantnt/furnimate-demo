import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart-pages/cart/cart.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ProductComponent } from './pages/product/product.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SessionComponent } from './pages/session/session.component';

const routes: Routes = [
{ path: '', component: CatalogComponent, title: 'Catalogo'},
{ path: 'producto', component: ProductComponent, title: 'Producto' },
{ path: 'carrito', component: CartComponent, title: 'Carrito'},
{ path: 'perfil', component: ProfileComponent, title: 'Perfil de usuario'},
{ path: 'sesion', component: SessionComponent, title: 'Inicio de sesion'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
