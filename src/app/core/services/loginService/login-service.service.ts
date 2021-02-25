import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  constructor(private http : HttpClient) { 

  }

login(data : any): Observable<any>
{
  try{
    return this.http.post('https://reqres.in/api/login',data)
    .pipe(map(Response => Response));
  }
  catch(error)
  {
      return Observable.throw(error);
      
  }
}
}
