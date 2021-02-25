import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeactivateGuard } from '../core/services/CanDeactivate/deactivate-guard.guard';

import { LoginServiceService } from '../core/services/loginService/login-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,DeactivateGuard{
  frm;
  Deactivate()
  {
    if(confirm('are u sure?'))
    {
      return true;
    }
    else
    {
      return false;
    }
  }
 
  constructor(fb: FormBuilder, private services : LoginServiceService,private _router : Router) { 

    this.frm = fb.group({

      username: ['',
                  [Validators.required,
                  ]],

      password : ['',Validators.required,]
                

    });

    if (localStorage.getItem('currentUser') !== null) {  
      this._router.navigate(['']);  
    }  

  }

  ngOnInit(): void {
  }
 get username()
 {
  //console.log('hey');
  return this.frm.get('username');
 }

 get password()
 {
  return this.frm.get('password');
 }
  login()
  {

    let data = { "email" : this.username?.value, "password" : this.password?.value};

    this.services.login(data)
    .subscribe(res => {

      if(res.token)
      {
        console.log(res.token);
        localStorage.setItem('currentUser', "loggedin");
        this._router.navigate(['']);
        
      }
         
      
    },
    (error: Response) => {
      if (error.status == 400) {
        console.log(error);
        alert('wrong password or username');
      }
      else throw error;
    })
       
    
  }

}