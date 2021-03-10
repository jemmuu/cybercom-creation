import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeactivateGuard } from '../core/services/CanDeactivate/deactivate-guard.guard';
import { RegFormDataService } from '../core/services/regFormData/reg-form-data.service';
import { UserListService } from '../core/services/userList/user-list.service';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.css']
})
export class NotFoundPageComponent implements OnInit,DeactivateGuard {
  _formData: any;
  _data :any = [];
  constructor(private _router : Router,private data : RegFormDataService, private apiCall : UserListService) { 
  }
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

  getUser()
  {
    // purpose of checking pwa
    this.apiCall.getUsers()
    .subscribe(dataa  => {this._data = dataa.data,console.log(this._data)})
  }


  // to navigate beetween components
    nav(link : HTMLInputElement)
  {
    this._router.navigate([`${link.value}`]);
  }

  // to load data 
  ngOnInit(): void {
    this.getUser();
  }

  

}
