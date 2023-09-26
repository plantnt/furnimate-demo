import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ItemService, Data, Items} from 'src/app/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, AfterViewInit{
  items: Items[] = []

  @ViewChild('itemImage')
  itemImg!: ElementRef

  constructor(private itemService: ItemService){

  }

  ngAfterViewInit(): void {
    const itemOptions = ["a", "b","c","d","e","f","g","h","i","j","k","l"]
    const randomOption = itemOptions[Math.floor(Math.random()*itemOptions.length)]

    if (this.itemImg && this.itemImg.nativeElement) {
      this.itemImg.nativeElement.src = `assets/img/products/product_${randomOption}.jpg`;
    }
  }

  ngOnInit(): void {
    // this.itemService.getItems().subscribe((response) => {
    //   console.log('API data:', response)
    //   if (Array.isArray(response)) {
    //     this.items = response;
    //   } else {
    //     this.items = [response];
    //   }
    // })
    this.itemService.getItems().subscribe({
      next: (data: Data) => {
        console.log(this.items)
        this.items = data.attributes
      },
      error: (err) => {
        this.items = []
      }
    })
  }
}
