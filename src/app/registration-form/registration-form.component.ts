import { Component, OnInit } from '@angular/core';

interface User{
  name:string,
  email:string,
  password:string,
  desination:string,
  bio:string,
  terms:boolean
}

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

public user:User={
  name:'',
  email:'',
  password:'',
  desination:'',
  bio:'',
  terms:false
}



  constructor() { }

  ngOnInit(): void { 
  }


  public submitRegister(){
    console.log(this.user)
  }

}
