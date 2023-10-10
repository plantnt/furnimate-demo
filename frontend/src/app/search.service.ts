import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  private filterSubject = new BehaviorSubject<string>('');
  private filter$: Observable<string> = this.filterSubject.asObservable();

  getFilter(): Observable<string> {
    return this.filter$;
  }

  setFiltro(filter: string) {
    this.filterSubject.next(filter);
  }
}
