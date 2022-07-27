import { Component, OnInit } from '@angular/core';

interface Product{
  sno:string,
  name:string,
  image:string,
  price:number,
  qty:number
}



@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

public products:Product[]=[
  {
    sno:"AA101",
    name:"Mi Watch",
    image:"https://i.gadgets360cdn.com/large/xiaomi_watch_live_image_mydrivers_1572853605373.jpg",
    price:1500,
    qty:2
  },


  {
    sno:"AA102",
    name:"Apple Watch",
    image:"https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjB3YXRjaHxlbnwwfHwwfHw%3D&w=1000&q=80",
    price:3500,
    qty:2
  },

  {
    sno:"AA101",
    name:"Oppo Watch",
    image:"https://assorted.downloads.oppo.com/static/assets/products/oppo-watch-1/images/1920/sec4-img2-165d0e746d71680275794cd4101eb0ac.png",
    price:6500,
    qty:2
  },

  {
    sno:"AA101",
    name:"Boat Watch",
    image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3.1_600x.png?v=1644401072",
    price:7500,
    qty:2
  },
]




  constructor() { }

  ngOnInit(): void {
  }

} 
