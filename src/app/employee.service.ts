import { Injectable } from '@angular/core';

import { Employee } from 'src/models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private employee:Employee={
  sno:"aa101",
  name:"Durga Mohapatra",
  age:25,
  designation:"Sr Software Engg",
  doj:new Date(),
  salary:20000
  }

  constructor() { }

  public getEmployee():Employee{
    return this.employee
  }
}
