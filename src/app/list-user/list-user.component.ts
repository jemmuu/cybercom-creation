import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { UserListService } from 'src/app/core/services/userList/user-list.service';
import { DeactivateGuard } from '../core/services/CanDeactivate/deactivate-guard.guard';



@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit,DeactivateGuard{

  _data : any = [];
 
  constructor(private service : UserListService, private _router : Router) { }


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
  }

  nav(link : HTMLInputElement)
  {
    this._router.navigate([`${link.value}`]);
  }


  getUser()
  {
    this.service.getUsers()
    .subscribe(dataa  => {this._data = dataa.data,console.log(this._data)})
  }

}
