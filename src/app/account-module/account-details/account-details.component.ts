import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/core/services/loginService/login-service.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  frm: any;

  constructor(fb: FormBuilder, public services : LoginServiceService,private _router : Router) { 

    this.frm = fb.group({

      username: ['',
                  [Validators.required,
                  ]],

      password : ['',Validators.required,]
                

    });

 

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
}

