import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

import { RegFormDataService } from '../core/services/regFormData/reg-form-data.service';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent implements OnInit {
 _cruiseForm: any;
 _formData:any;
 _formDataa: string='';
 info :any[]= [];
 _emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private _fb : FormBuilder, private data : RegFormDataService) { }

  ngOnInit(): void {
    
    this.data._latestData$.subscribe(latestData =>{console.log(latestData + ' in subcrib form task success'), this._formDataa = latestData});
    this._cruiseForm = this._fb.group({

      date : ['',Validators.required],
      time : this._fb.group({
                              hour : ['',Validators.required],
                              minute : ['',Validators.required],

                           }),
      noOfParticipant : ['',Validators.required],
      contactInfo : [''],
      contactForm : this._fb.group({
        fullName:this._fb.group({
          firstName:[''],
          lastName:['']
        }),
        email:[''],
        phoneNumber:[''],
        areaCode : [''],
        
      }),

      




    });
    console.log(this._cruiseForm.value);
  }

 
  addControls() 
  // : FormGroup
  {
    // // if(this._cruiseForm.get('contactInfo').value == 'yes')
    // if(true)
    // {
    //   console.log(this._cruiseForm.value);
    // return this.fb.group({firstName: ['',Validators.required],
    // lastName : ['',Validators.required],
    // email : ['',Validators.required,Validators.pattern(this._emailRegex)],
    // areaCode : ['',Validators.required],
    // phoneNumber : ['',Validators.required]})
    // }

    // console.log(this._cruiseForm.value);
    // return this.fb.group({});

    console.log(this._cruiseForm.get('contactInfo').value);
    if(this._cruiseForm.get('contactInfo').value=='yes'){
     

      this.firstName.setValidators([Validators.required]);
      this.firstName.updateValueAndValidity();
      
      this.lastName.setValidators([Validators.required]);
      this.lastName.updateValueAndValidity();

      this.email.setValidators([Validators.required,Validators.pattern(this._emailRegex)]);
      this.email.updateValueAndValidity();

      this.areaCode.setValidators([Validators.required]);
      this.areaCode.updateValueAndValidity();

      this.phoneNumber.setValidators([Validators.required]);
      this.phoneNumber.updateValueAndValidity();
    }
    
    else{
      console.log('in else');
      this.firstName.clearValidators();
      this.firstName.updateValueAndValidity();

      this.lastName.clearValidators();
      this.lastName.updateValueAndValidity();

      this.email.clearValidators();
      this.email.updateValueAndValidity();

      this.areaCode.clearValidators();
      this.areaCode.updateValueAndValidity();

      this.phoneNumber.clearValidators();
      this.phoneNumber.updateValueAndValidity();

    }
  }

  //copy form data from form
  dataSwap()
  {
   
     this._formData = this._cruiseForm.value;
     this.data.changeData(this._formData);
    
    
    


  }

  

 
  
  get date(){return this._cruiseForm.get('date');}
  get timeHour(){return this._cruiseForm.get('time.hour');}
  get timeMinute(){return this._cruiseForm.get('time.minute');}
  get participants(){return this._cruiseForm.get('noOfParticipant');}
  get array(){ return (<FormArray>this._cruiseForm.get("contactForm"))}

  get firstName(){return this._cruiseForm.get('contactForm.fullName.firstName');}
  get lastName(){return this._cruiseForm.get('contactForm.fullName.lastName');}
  get email(){return this._cruiseForm.get('contactForm.email');}
  get phoneNumber(){return this._cruiseForm.get('contactForm.phoneNumber');}
  
  get areaCode()
  { return this._cruiseForm.get('contactForm.areaCode') }

}
