import { Component, OnInit, AfterViewInit, ElementRef, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @ViewChild('productImage')
  productImg!: ElementRef

  ngAfterViewInit(): void {
    const itemOptions = ["a", "b","c","d","e","f","g","h","i","j","k","l"]
    const randomOption = itemOptions[Math.floor(Math.random()*itemOptions.length)]

    if (this.productImg && this.productImg.nativeElement) {
      this.productImg.nativeElement.src = `assets/img/products/product_${randomOption}.jpg`;
    }
  }
}
