import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.scss']
})
export class ItemMenuComponent implements OnInit {
  menuItems: Item[];
  // itemSelected;
  constructor(private itemService: ItemService, private orderService: OrderService) { }


  getItems(): void {
    this.itemService.getItems()
    .subscribe(menuItems => this.menuItems = menuItems);
  }

  ngOnInit() {
    this.getItems(); 
  }
  // display(item){
  //   this.itemSelected = item.price;
  //   console.log(item);
  // }
}
