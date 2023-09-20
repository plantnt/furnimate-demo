import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs"

export interface Data{
  id: number
  attributes: Items[]
}

export interface Items{
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

  getItems(): Observable<Data>{
    return this.http.get<Data>(`${this.apiUrl}/api/items`)
  }
}
