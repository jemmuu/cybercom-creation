import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { customValidator } from '../common/validator.custom';

@Component({
  selector: 'app-reg-form-task',
  templateUrl: './reg-form-task.component.html',
  styleUrls: ['./reg-form-task.component.css']
})
export class RegFormTaskComponent implements OnInit {

  
  numericRegex ='^[0-9 ]*$';
  alphabatRegx = /^[a-zA-Z ]*$/;
  form : any;
  constructor(private fb: FormBuilder) {

   


  }

  ngOnInit(): void {


    this.form = this.fb.group(
      {
        name: this.fb.group({

                      firstName:
                        [
                          '',
                          [
                            Validators.required,
                            Validators.minLength(4),
                            customValidator.containNoblankspace,
                            Validators.pattern(this.alphabatRegx)
                          ],
                        ],
                      lastName:
                        [
                          '',
                          [
                            Validators.required,
                            Validators.minLength(4),
                            customValidator.containNoblankspace,
                            Validators.pattern(this.alphabatRegx)
                          ],
                        ],
                        
              }),
          email:
              [
                '',
                [
                  Validators.required,
                  customValidator.containNoblankspace,
                  Validators.email,
                  
                  
                ],
              ],

          contactNumber : 
              ['',

                [
                  Validators.required,
                  customValidator.containNoblankspace,
                  Validators.pattern(this.numericRegex)
                ],
              
              
              ],

             alter :
             ['',

              [ 
                
                customValidator.containNoblankspace,
                Validators.pattern(this.numericRegex)
              ],
             ],

             designation :
             ['',
                  [
                  Validators.required,
                  customValidator.containNoblankspace,
                  Validators.pattern(this.alphabatRegx)

                  ],          
             ],

             joinDate :
             ['',
                    [ 
                      // Validators.required,
                      customValidator.dateValidatorFuture,
                    ]
            
            
            ],

            currentAddress :
            ['',
                [  Validators.required,
                  
                ],
          
          ],
          panNumber : 
          ['',

            [
              Validators.required,
              customValidator.containNoblankspace,
              Validators.pattern(this.numericRegex)
            ],
          
          
          ],

          aadharNumber : 
          ['',

            [
              Validators.required,
              customValidator.containNoblankspace,
              Validators.pattern(this.numericRegex)
            ],
          
          
          ],

             
       



      })


  }


firstName()
{
  return this.form.get('name.firstName');
}

lastName()
{
  return this.form.get('name.lastName');
}

emailChk()
{
  return this.form.get('email');
}

contactNumber()
{
  return this.form.get('contactNumber');
}

alter()
{
  return this.form.get('alter');
}

designation()
{
  return this.form.get('designation');
}

panNumber()
{
  return this.form.get('panNumber');

}

aadharNumber()
{
  return this.form.get('aadharNumber');

}




}
