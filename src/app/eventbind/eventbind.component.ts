import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  templateUrl: './eventbind.component.html',
  styleUrls: ['./eventbind.component.css']
})
export class EventbindComponent implements OnInit {

public count:number=0


  constructor() { }

  ngOnInit(): void {
  } 

public increment(){
  this.count=this.count+1
}


public decrement(){
  this.count=this.count-1 > 0 ? this.count -1: 0
}



}
