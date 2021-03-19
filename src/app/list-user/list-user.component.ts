import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwPush } from '@angular/service-worker';


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
  _publicKey = 'BNqG3gE2ogSuUoOXo6A8TM90mjb2ChInoAJb_1tSghRcN4v2ZYzF_0rJfBNP3FJX8lp3fsAB0EV4bhchDjfXVr0';

  
  _formData : any;
 
  constructor(private service : UserListService, 
              private data : RegFormDataService,
              private _router : Router,
              private swPush : SwPush) { }

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
    
    if(!this.swPush.isEnabled)
  {
    console.log('notfication is not enable');
    return;
  }

  this.swPush.requestSubscription({
    serverPublicKey: this._publicKey,
  }).then(sub=>{ console.log('hey'), console.log(JSON.stringify(sub))}).catch(err=> console.log(err));

  this.swPush.messages.subscribe(message => console.log(message));

  // click to redirect through notification
  this.swPush.notificationClicks.subscribe(
    ({action, notification}) => {
      console.log('click on notification triggered');
      window.open(notification.data.url);
    }
  )
    console.log(this._formData);
  }

}
