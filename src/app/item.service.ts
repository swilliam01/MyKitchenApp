import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemsUrl = 'api/items';  // URL to web api

  constructor(private http: HttpClient) { }

  /** GET items from the server */
getItems (): Observable<Item[]> {
  return this.http.get<Item[]>(this.itemsUrl)
}


}

