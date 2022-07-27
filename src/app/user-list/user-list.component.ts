import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

public users:User[]=[] as User[]

public errorMessage:string=""

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    
  }

  getUsersData(){
    this.userService.getUsers().subscribe((data)=>{
      this.users=data
    },(error)=>{
    this.errorMessage=error
    })
  }

} 
