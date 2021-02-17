import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ErrorHandler } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable(
    {
      providedIn : 'root',
    }
   
)

export class globalErrorHandler implements ErrorHandler
{       constructor( ){}
        

handleError(error: any)
        
{
        if (error instanceof HttpErrorResponse ) {
          alert("something went wrong");
        }
        else
        {
          console.log('catching error in global');
        alert(error.message);
        }
          
        }
    
}