import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ItemService, Item } from 'src/app/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})


export class ItemComponent implements OnInit, AfterViewInit{
  // items: Item[] = []
  @ViewChild('itemImg')
  itemImg!: ElementRef;


  constructor(private itemService: ItemService){
    
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
  ngAfterViewInit(): void {
    const imageOptions = ["a.jpg","b.jpg","c.jpg","d.jpg","e.jpg","f.jpg","g.jpg"]
    const randomImg = imageOptions[Math.floor(Math.random()*imageOptions.length)]
    if (this.itemImg && this.itemImg.nativeElement) {
      this.itemImg.nativeElement.src = `assets/img/product_${randomImg}`;
    }
  }
}

