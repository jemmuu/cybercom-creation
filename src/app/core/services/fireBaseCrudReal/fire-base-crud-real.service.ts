import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireBaseCrudRealService {

  constructor(private db : AngularFireDatabase) { }


  addEmloyee(record : object) 
  {
     try {
       let data = this.db.list('employees');
      return data.push(record)
     } catch(error)  {
       throw throwError(error);
     }
  }

  getEmloyee()
  {
     try {
       
      return this.db.list('employees').snapshotChanges();
     } catch(error)  {
      throw throwError(error);
     }
  }

  updateEmloyee( recordid: any ,record : object)
  {
     try {
      let data = this.db.list('employees');
       data.update(recordid,record);
     } catch(error)   {
      throw throwError(error);
     }
  }

  deleteEmployee(dataId : any)
  {
    try {
      let data = this.db.list('employees');
      data.remove(dataId);
    } catch(error)  {
      throw throwError(error);
    }
  }


}
