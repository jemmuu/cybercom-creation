import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { take, catchError } from 'rxjs/operators';
import { DeactivateGuard } from '../core/services/CanDeactivate/deactivate-guard.guard';

import { LoginServiceService } from '../core/services/loginService/login-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,DeactivateGuard{
  frm;
  //function for canDeactivate
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
 
  //form validation 
  constructor(fb: FormBuilder, public services : LoginServiceService,private _router : Router) { 

    this.frm = fb.group({

      username: ['',
                  [Validators.required,
                  ]],

      password : ['',Validators.required,]
                

    });

    //checking if user already log in
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

 //check creditials if token receive in responce than store login in local storage 
  login()
  {

    let data = { "email" : this.username?.value, "password" : this.password?.value};

    this.services.login(data);

    // this.services.login(data)
    // .subscribe(res => {

    //   if(res.token)
    //   {
    //     console.log(res.token);
    //     localStorage.setItem('currentUser', "loggedin");
    //     this._router.navigate(['']);
        
    //   }
         
      
    // },
    // (error: Response) => {
    //   if (error.status == 400) {
    //     console.log(error);
    //     alert('wrong password or username');
    //   }
    //   else throw error;
    // })
       
     
  }



  loginViaGoogle()
  {
   
      this.services
        .loginViaGoogle()
        .pipe(
          take(1),
          catchError((error) => {
            alert('error' + error)
            return EMPTY;
          }),
        )
        .subscribe(
          (response) =>{
            response &&
            alert('success');
            localStorage.setItem('currentUser', "loggedin");
            this._router.navigate(['']);
           } );
    }
  


}