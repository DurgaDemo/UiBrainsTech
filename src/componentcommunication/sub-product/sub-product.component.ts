import { Component, Input, OnInit } from '@angular/core';

interface Product{
  sno:string,
  name:string,
  image:string,
  price:number,
  qty:number
}



@Component({
  selector: 'app-sub-product',
  templateUrl: './sub-product.component.html',
  styleUrls: ['./sub-product.component.css']
})
export class SubProductComponent implements OnInit {


  @Input() prod:Product | undefined

  constructor() { }

  ngOnInit(): void {
  }

} 
