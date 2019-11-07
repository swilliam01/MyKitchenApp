import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Item } from '../item'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orders;
  cost;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orders = this.orderService.getItems();
    // console.log('this is total cost', this.orderService.getCost());
  }

  totalPrice(){
    this.cost = this.orderService.getCost();
      console.log('this is total cost', this.cost);
     return this.cost;
   }

}
