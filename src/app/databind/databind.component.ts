import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {


public myName:string="Durga Mohapatra"

public img:string="assets/pic_1.jpg"

public time:string= new Date().toLocaleTimeString()
  constructor() {
    this.updateTime()
   }

  ngOnInit(): void {
  }


  public getDate():string{
    return new Date().toLocaleDateString();
  }

  public updateTime(){
    setInterval( ()=>{
    this.time= new Date().toLocaleTimeString()
    },1000)
  }
 
}
