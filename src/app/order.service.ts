import { Injectable } from '@angular/core';
import { ItemService } from './item.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
orderedItems = [];

  constructor(private itemService: ItemService) { }

  addToCart(product) {
    this.orderedItems.push(product);
  }

  getItems() {
    return this.orderedItems;
  }

  clearCart() {
    this.orderedItems = [];
    return this.orderedItems;
  }

   getCost(){
    var sum = 0;

    for(let i= 0; i < this.orderedItems.length; i++){
      sum = sum + this.orderedItems[i].price;
    }
    return sum;

   }

}
