import { AbstractControl, ValidationErrors } from "@angular/forms";
import { resolve } from "dns";
import { promise } from "protractor";
import { TimeoutError } from "rxjs";

export class customValidator
{
    static containNoblankspace(control : AbstractControl) :  ValidationErrors | null
    {
            if((control.value as string).indexOf(' ') >= 0 )
              return {containNoblankspace : true};

        return null;
    }

    static uniqueusername(control : AbstractControl) : Promise<ValidationErrors | null>
    {
                return new Promise((resolve,reject)=>
                {
                        setTimeout(()=> {
                                            if(control.value == 'jemmu')
                                              resolve({uniqueusername : true});
                                            else
                                                resolve(null);

                        },2000);
                });

    }
}