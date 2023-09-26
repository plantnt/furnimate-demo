import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart-pages/cart/cart.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ProductComponent } from './pages/product/product.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
{ path: '', component: CatalogComponent, title: 'Cátalogo'},
{ path: 'producto', component: ProductComponent, title: 'Producto' },
{ path: 'carrito', component: CartComponent, title: 'Carrito'},
{ path: 'perfil', component: ProfileComponent, title: 'Perfil de usuario'},
{ path: 'login', component: LoginComponent, title: 'Inicio de sesión'},
{ path: 'register', component: RegisterComponent, title: 'Registro de cuenta'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
