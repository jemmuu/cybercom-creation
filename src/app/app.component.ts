import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'angular-final';
  update : boolean = false;
  constructor(updates : SwUpdate)
{

  //in pwa we have to refresh few times to get updated data foolowing fun for refreshing page if 
  //code is updated  
  updates.available.subscribe(ev =>
    
    updates.activateUpdate().then(()=> document.location.reload()),
    //this.update = true
    
    )
    
    
}
  
}
