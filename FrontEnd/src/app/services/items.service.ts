import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Item } from '../models/Item';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  url : string = 'http://10.0.0.177:3000/api' // modificar si no se ven los datos de la base
  constructor(private http : HttpClient) { }

  getItems(): Observable<Item[]>{
    
    return this.http.get<Item[]>(`${this.url}/items`);
  }

  getItem(id : Number) : Observable<any>{
    return this.http.get(`${this.url}/items/${id}`);
  }
  saveItem(Item : Item) : Observable<Item>{
    return this.http.post(`${this.url}/Items`, Item);
  }
  deleteItem(id : string) : Observable<Item>{
    return this.http.delete(`${this.url}/Items/${id}`);
  }
  updateItem(id: string, updatedItem : Item) : Observable<Item>{
    return this.http.put(`${this.url}/Items/${id}`,updatedItem);
  }
}
