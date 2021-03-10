import { Component, OnInit } from '@angular/core';
import { FireBaseCrudService } from '../core/services/fireBaseCrud/fire-base-crud.service';
// firebase ci token = '1//0gyU_KTv6Xg1OCgYIARAAGBASNwF-L9IrtoayTSFJPnFlPcvqBJjSyytUrs2kqXqTaSE-0mZ-hYjLCW5Y4Ddm8O3tDc-OBPeFAkU'
@Component({
  selector: 'app-fire-store-crud',
  templateUrl: './fire-store-crud.component.html',
  styleUrls: ['./fire-store-crud.component.css']
})
export class FireStoreCrudComponent implements OnInit {

  constructor(private service : FireBaseCrudService) { }
  _employee : any = [];
  _employeeName: string | undefined;
  _employeePosition : string | undefined;

  ngOnInit(): void {

    this.service.getEmloyee().subscribe(data=>{ 
      
      this._employee=data.map(e =>
         {  
           //console.log(e.payload.doc.data()); 
            return {

              id : e.payload.doc['id'],
              isEdit : false,
               name : (e.payload.doc.data() as any )['name'],
               position : (e.payload.doc.data() as any )['position'],
            };

        }
        )
      
    
    });
  }
  

   addEmployee()
   {
      if(this._employeeName !== "" && this._employeePosition !== "")
      {
        let data: any = {};
        data['name'] = this._employeeName;
        data['position']= this._employeePosition;

        this.service.addEmloyee(data).then(res =>
          {
            this._employeeName='';
            this._employeePosition='';
            console.log(res);
          }        
          ).catch(error=> {console.log(error)} );

      }
      else{
        alert('add needed info');
      }
   }

   updateMode(data : any)
   {
     data.isEdit = true;
     data.editName = data.name;
     data.editPosition = data.position;
   }
   updateData(data : any)
   {
       let newData : any = {};
       newData.name = data.editName;
       newData.position = data.editPosition;

       this.service.updateEmloyee(data.id, newData);

   }

   cancleEdit(data : any)
   {
     data.isEdit = false;
   }

   delete(id : string)
   {
     this.service.deleteEmployee(id);
   }
}
