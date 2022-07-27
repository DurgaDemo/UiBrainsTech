import { Component, OnInit } from '@angular/core';

interface Product{
sno:string;
name:string;
image:string;
qty:number;
price:number  
}

 

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {


public product:Product={
  sno:'AA101',
  name:'Mi Watch',
  image:'https://m.media-amazon.com/images/I/61UNaFge4tL._SX466_.jpg',
  qty:2,
  price:1500
};


  constructor() { }

  ngOnInit(): void {
  }

public incrementQty(){
  this.product={
    ...this.product,
    qty:this.product.qty +1
  }
}


public decrementQty(){
  this.product={
    ...this.product,
    qty:this.product.qty -1 > 0 ? this.product.qty -1: 1
  }
}


} 
