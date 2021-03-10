import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { UserListService } from 'src/app/core/services/userList/user-list.service';
import { DeactivateGuard } from '../core/services/CanDeactivate/deactivate-guard.guard';
import { RegFormDataService } from '../core/services/regFormData/reg-form-data.service';




@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit,DeactivateGuard{

  _data : any = [];

  
  _formData : any;
 
  constructor(private service : UserListService, private data : RegFormDataService,private _router : Router) { }

//fun for deactivate routeguard 
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

  ngOnInit(): void {

    this.getUser();
    this.data._latestData$.subscribe(latestData =>{console.log(latestData + ' in subcrib list user success'), this._formData = latestData});
  }

  //for navigation in diff component
  nav(link : HTMLInputElement)
  {
    this._router.navigate([`${link.value}`]);
  }

  // get all data from api
  getUser()
  {
    this.service.getUsers()
    .subscribe(dataa  => {this._data = dataa.data,console.log(this._data)})
  }


  
  // check if data is store in variable or not (testng purpose only)
  print()
  {
    
    
    console.log(this._formData);
  }

}
