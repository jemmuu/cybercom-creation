import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-crypto-js',
  templateUrl: './crypto-js.component.html',
  styleUrls: ['./crypto-js.component.css']
})
export class CryptoJsComponent implements OnInit {

  _request:any;
  _encrypted : any;
  _descrypted : any;
  _valid : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
 
 
 

 
  encrypt()
  {
    if(this._request == '')
    {
      alert('please enter value');
    }else{
      // Encrypt
    this._encrypted = CryptoJS.AES.encrypt(JSON.stringify(this._request), 'secret key 123').toString();
    this._descrypted= '';
    this._valid = true;
    }
    this._request= '';
  }

  decrypt()
  {
    if(this._request.indexOf('U2FsdGVkX1')!= -1)
    {
    //Descrption
    let bytes  = CryptoJS.AES.decrypt(this._encrypted, 'secret key 123');
    this._descrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    this._encrypted = '';
    this._valid = true;
    }
    this._request= '';
  }

  copyMessage()
  {
    if(this._descrypted!= '')
    {
      const selBox = document.createElement('textarea');
      selBox.value = this._descrypted;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);
    }
    else if(this._encrypted!= '')
    {
      const selBox = document.createElement('textarea');
      selBox.value = this._encrypted;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);
    }
    this._request= '';
  }
}
