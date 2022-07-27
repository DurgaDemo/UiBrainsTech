import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  public isLoggedIn:boolean=false

  constructor() { }

  ngOnInit(): void {
  }


  public Login(){
    this.isLoggedIn=true 
  }

  public Logout(){
    this.isLoggedIn=false
  }
 
}
