import { Component } from '@angular/core';
import { filter } from 'rxjs';
import { SearchService } from 'src/app/search.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
 items = [
    { nombre: 'Muebles' },
    { nombre: 'Sillas' },
    { nombre: 'Mesas' },
    // ... más productos
  ];
 constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.getFilter().subscribe((filter: string) => {
      // Filtrar los productos en función del término de búsqueda
      this.items = this.items.filter(item =>
        item.nombre.toLowerCase().includes(filter.toLowerCase())
      );
    });
  }
}
