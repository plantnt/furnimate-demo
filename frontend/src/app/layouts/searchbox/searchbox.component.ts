import { Component } from '@angular/core'
import { SearchService } from 'src/app/search.service'
@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent {
filter: any;
  constructor(private searchService: SearchService) { }

  onInputChange(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.searchService.setFiltro(filtro);
  }
  }
