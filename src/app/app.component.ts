import { Component } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { MesseagingService } from './core/services/messeaging/messeaging.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'angular-final';
  update : boolean = false;
  _publicKey = 'BNqG3gE2ogSuUoOXo6A8TM90mjb2ChInoAJb_1tSghRcN4v2ZYzF_0rJfBNP3FJX8lp3fsAB0EV4bhchDjfXVr0';
  message: any;
  constructor(updates : SwUpdate ,private swPush : SwPush,private messagingService: MesseagingService )
{

  //in pwa we have to refresh few times to get updated data foolowing fun for refreshing page if 
  //code is updated  
  updates.available.subscribe(ev =>
    
    updates.activateUpdate().then(()=> document.location.reload()),
    //this.update = true
    
    )
    
    
}

notification()
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

}

  ngOnInit()
  {
    this.notification();
    // console notification data object

    this.messagingService.requestPermission()
  this.messagingService.receiveMessage()
  this.message = this.messagingService.currentMessage
 }
  
}
