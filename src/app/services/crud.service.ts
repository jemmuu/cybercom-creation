import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { badError } from '../common/400-error';
import { notfound } from '../common/404-error';
import { allError } from '../common/allError';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {

 

  constructor(@Inject(String) private url: string  ,private http: HttpClient) {

  }



  getData() {
    return this.http.get(this.url)
    
      .pipe( map(Response=>Response),
        
        catchError((this.errorHandle)));

  }

  addData(data: any) {
    return this.http.post(this.url, JSON.stringify(data))
      .pipe(map(Response=>Response),
        catchError((this.errorHandle)));


  }

  updateData(data: any) {
    return this.http.patch(this.url + '/' + data.id, { title: 'updated' })
      .pipe(map(Response=>Response),
        catchError((this.errorHandle)));

  }

  deleteData(data: any) {
    return this.http.delete(this.url + '/' + data)
      .pipe(map(Response=>Response),
        catchError((this.errorHandle)));
  }


  private errorHandle(error: Response) {
    if (error.status === 404) {
      console.log('hello erroehandle fun');
      return throwError(new notfound());
    }
    if (error.status === 400) {
      console.log('error thrown');
      return throwError(new badError(error));
    }
    return throwError(new allError(error));


  }
}
