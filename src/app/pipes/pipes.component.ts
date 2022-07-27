import { Component, OnInit } from '@angular/core';

import { Employee } from 'src/models/Employee';
 

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

public employee:Employee={
  sno:"aa101",
  name:"Durga Mohapatra",
  age:25,
  designation:"Sr Software Engg",
  doj:new Date(),
  salary:20000
}



  constructor() { }

  ngOnInit(): void {
  }
 
}
