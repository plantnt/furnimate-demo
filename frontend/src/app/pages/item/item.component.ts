import { Component, OnInit } from '@angular/core';
import { ItemService, Item } from 'src/app/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{
  items: Item[] = []

  constructor(private itemService: ItemService){

  }

  ngOnInit(): void {
    this.itemService.getItems().subscribe((response) => {
      console.log('API data:', response)
      if (Array.isArray(response)) {
        this.items = response;
      } else {
        this.items = [response];
      }
    })
  }
}

