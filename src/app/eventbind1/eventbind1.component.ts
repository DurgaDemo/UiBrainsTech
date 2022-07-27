import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbind1',
  templateUrl: './eventbind1.component.html',
  styleUrls: ['./eventbind1.component.css']
})
export class Eventbind1Component implements OnInit {

public message:string="Hello"

  constructor() { }

  ngOnInit(): void {
  } 

  public Eventbind(msg:string):void{
  this.message=msg
  }


  // public Eventbind1(){
  //   this.message="Hi Good Afternoon"
  //   }

  //   public Eventbind2(){
  //     this.message="Hi Good Evening"
  //     }
  


}
