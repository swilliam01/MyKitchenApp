import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const items =[
      {id:1, name: "Chicken Biryani", price: 10.50, pic: "https://i.pinimg.com/originals/39/6f/f9/396ff9a60cf3ad43fed7db03f6133a35.jpg" },
      {id:2, name: "Goat Karahi", price: 11.00, pic: "https://pizzaisland.ca/img/cdn/533_2a3e2b6c7d84d96ecd2651b95f20cd03.jpg"},
      {id:3, name: "Tandoori Chicken", price: 11.00, pic: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chicken-tandori-1526595014.jpg"},
      {id:4, name: "Daal Makhni", price: 8.50, pic:"https://vaya.in/recipes/wp-content/uploads/2018/03/Dal-Makhani.jpg"},
      {id:5, name: "Palak Paneer", price: 10.00, pic:"https://d3tfnts8u422oi.cloudfront.net/386x386/sayan-majumder15160348875a5cdb47976b0.jpg"},
      {id:6, name: "Mutton Biryani", price: 12.00, pic:"https://i0.wp.com/www.bharatzkitchen.com/wp-content/uploads/2018/06/mutton-biryani2.jpg?fit=800%2C450"}
    ]
    return {items};
  }
  constructor() { }
}
