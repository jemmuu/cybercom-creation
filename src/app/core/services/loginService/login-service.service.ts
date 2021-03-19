import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import 'firebase/auth';
import  firebase from 'firebase/app';

import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  constructor(private http : HttpClient,private router : Router,private afAuth: AngularFireAuth, private afs: AngularFirestore,) { 

  }

// login(data : any): Observable<any>
// {
//   try{
//     //eve.holt@reqres.in
//     //cityslicka
//     return this.http.post('https://reqres.in/api/login',data)
//     .pipe(map(Response => Response));
//   }
//   catch(error)
//   {
//       return Observable.throw(error);
      
//   }
// }

login(data : any)  {
  return this.afAuth.signInWithEmailAndPassword(data.email, data.password)
    .then(result => {
      console.log('success log in');
      localStorage.setItem('currentUser', "loggedin");
      this.router.navigate(['']);
     
    })
    .catch(err => {
      console.log(err.message);
    })
} 

loginViaGoogle(): Observable<firebase.auth.UserCredential> {
  return from(this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()));
}


registration(email : any, password : any) {
  return this.afAuth.createUserWithEmailAndPassword(email, password)
    .then(result => {
      alert('success');
      this.router.navigate(['']);
      
    })
    .catch(err => {
      console.log(err.message);
    })
}
}
