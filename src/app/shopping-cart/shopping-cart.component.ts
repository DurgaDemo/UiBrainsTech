import { Component, OnInit } from '@angular/core';

interface Product{
  sno:string;
  name:string; 
  image:string; 
  price:number
  qty:number;
  } 
 
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public products:Product[]=[
  {
      sno:'AA101',
     name:'Mi Watch',
     image:'https://images.unsplash.com/photo-1615368144592-44708889c926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwd2F0Y2h8ZW58MHx8MHx8&w=1000&q=80',
     qty:2,
     price:1500,
     
    },
    {
      sno:'AA102',
     name:'Mi Watch',
     image:'https://images.unsplash.com/photo-1615368144592-44708889c926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwd2F0Y2h8ZW58MHx8MHx8&w=1000&q=80',
     qty:1,
     price:1500,
     
    },
   
    {
      sno:'AA103',
     name:'Boat Watch',
     image:'https://images.unsplash.com/photo-1615368144592-44708889c926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwd2F0Y2h8ZW58MHx8MHx8&w=1000&q=80',
     qty:5,
     price:3500,
    
    },
    {
      sno:'AA104',
     name:'noise Watch',
     image:'https://images.unsplash.com/photo-1615368144592-44708889c926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwd2F0Y2h8ZW58MHx8MHx8&w=1000&q=80',
     qty:3,
     price:5500,
    }
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

  

} 
