import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/models/Employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employee:Employee={} as Employee

  constructor(private employeeService:EmployeeService) { }
 
  ngOnInit(): void {
    this.employee=this.employeeService.getEmployee()
  }

}
