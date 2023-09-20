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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiltersComponent,
    AdsComponent,
    FooterComponent,
    UserHelpFooterComponent,
    ItemComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
