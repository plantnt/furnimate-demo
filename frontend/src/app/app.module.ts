import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FiltersComponent } from './layouts/filters/filters.component';
import { AdsComponent } from './layouts/ads/ads.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { UserHelpFooterComponent } from './layouts/user-help-footer/user-help-footer.component';
import { ItemComponent } from './pages/item/item.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { CartComponent } from './pages/cart-pages/cart/cart.component';
import { ProductComponent } from './pages/product/product.component';
import { CartItemsComponent } from './pages/cart-pages/cart-items/cart-items.component';
import { CartListComponent } from './pages/cart-pages/cart-list/cart-list.component';
import { CartSummaryComponent } from './pages/cart-pages/cart-summary/cart-summary.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchboxComponent } from './layouts/searchbox/searchbox.component';
import { FormsModule } from '@angular/forms';
import { FilterProductosPipe } from './filter-productos.pipe';
import { SearchService } from './search.service';
import { PasswordVisibilityDirective } from './password-visibility.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiltersComponent,
    AdsComponent,
    FooterComponent,
    UserHelpFooterComponent,
    ItemComponent,
    CatalogComponent,
    CartComponent,
    ProductComponent,
    CartComponent,
    CartItemsComponent,
    CartListComponent,
    CartSummaryComponent,
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
    SearchboxComponent,
    FilterProductosPipe,
    PasswordVisibilityDirective,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
