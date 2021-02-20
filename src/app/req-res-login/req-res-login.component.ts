import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-req-res-login',
  templateUrl: './req-res-login.component.html',
  styleUrls: ['./req-res-login.component.css']
})
export class ReqResLoginComponent implements OnInit {

  frm;
  constructor(fb: FormBuilder) { 

    this.frm = fb.group({

      username: ['',
                  [Validators.required,
                  ]],

      password : ['',Validators.required,]
                

    })

  }

  ngOnInit(): void {
  }
 get username()
 {
  console.log('hey');
  return this.frm.get('username');
 }

 get password()
 {
  return this.frm.get('password');
 }
  login()
  {

  }

}
