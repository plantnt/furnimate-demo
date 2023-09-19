import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs"

export interface Item{
  title: string
  description: string
  price: number
}


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'http://localhost:1337'
  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]>{
    return this.http.get<Item[]>(`${this.apiUrl}/api/items`)
  }
}
