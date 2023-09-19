import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ItemService, Item } from 'src/app/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, AfterViewInit{
  items: Item[] = []
  @ViewChild('itemImage')
  itemImg!: ElementRef

  constructor(private itemService: ItemService){

  }

  ngAfterViewInit(): void {
    const itemOptions = ["a.jpg", "b.jpg", "c.jpg"]
    const randomOption = itemOptions[Math.floor(Math.random()*itemOptions.length)]

    if (this.itemImg && this.itemImg.nativeElement) {
      this.itemImg.nativeElement.src = `assets/img/product_${randomOption}`;
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
  }
}
