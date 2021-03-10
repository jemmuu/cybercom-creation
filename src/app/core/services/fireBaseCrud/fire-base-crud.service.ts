
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FireBaseCrudService {

  constructor(private fireService : AngularFirestore) { }

  addEmloyee(record : object) 
  {
     try {
       
      return this.fireService.collection('employees').add(record);
     } catch(error)  {
       throw throwError(error);
     }
  }

  getEmloyee()
  {
     try {
       
      return this.fireService.collection('employees').snapshotChanges();
     } catch(error)  {
      throw throwError(error);
     }
  }

  updateEmloyee( recordid: any ,record : object)
  {
     try {
       
       this.fireService.doc('employees/' + recordid).update(record);
     } catch(error)   {
      throw throwError(error);
     }
  }

  deleteEmployee(dataId : any)
  {
    try {
       this.fireService.doc('employees/' + dataId).delete();
    } catch(error)  {
      throw throwError(error);
    }
  }



}
