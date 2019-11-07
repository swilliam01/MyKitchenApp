import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';
import { OrderService } from '../order.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
 @Input() itemchild: any;
//  @Output() toParent1: EventEmitter<any> = new EventEmitter<any>();
  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }
// toParent(item){
//   this.toParent1.emit(item);
// }
addToCart(item) {
  window.alert('Your Item has been added to the orders list!');
  this.orderService.addToCart(item);
}

}
