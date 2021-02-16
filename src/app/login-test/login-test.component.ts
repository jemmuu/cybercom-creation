import { customValidator } from '../common/validator.custom';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { NgxImageCompressService } from 'ngx-image-compress';

@Component({
  selector: 'app-login-test',
  templateUrl: './login-test.component.html',
  styleUrls: ['./login-test.component.css']
})
export class LoginTestComponent implements OnInit {

  frm;
  //  frm = new FormGroup({
  //     formgrp: new FormGroup({
  //       username: new FormControl('',
  //         [
  //           Validators.required,
  //           Validators.minLength(3),
  //           customValidator.containNoblankspace

  //         ], customValidator.uniqueusername),
  //       password: new FormControl('', Validators.required)

  //     }),
  //     frmArray: new FormArray([]),

  //    });

  constructor(fb: FormBuilder, private toastr: ToastrService,private imageCompress: NgxImageCompressService) {
    this.frm = fb.group({

      formgrp: fb.group({
        username: ['',
          [Validators.required,
          Validators.minLength(3),
          customValidator.containNoblankspace
          ],
          customValidator.uniqueusername],
        password: ['', Validators.required]

      }),

      frmArray: fb.array([])

    });
  }

  username() {
    console.log('hey');
    return this.frm.get('formgrp.username');

  }

  arraypush(hobby: HTMLInputElement) {

    (this.frm.get('frmArray') as FormArray).push(new FormControl(hobby.value));
    console.log(hobby.value);
    hobby.value = ' ';

  }

  frmArray() {
    return this.frm.get('frmArray') as FormArray;
  }

  ngOnInit() {

  }

  click() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  login() {

    this.frm.setErrors({
      invalidLogin: true,
    });

    Swal.fire('Oops...', 'Login Creditial are invalid', 'error');
  }

  counter = 0;
  toast() {
    switch (this.counter) {

      case 0:
        this.toastr.success("Hello, I'm the toastr message.", 'toast test', {

          progressBar: true,
          progressAnimation: 'increasing',
          closeButton: true,
          timeOut: 1000

        });
        this.counter++;
        console.log(this.counter);
        break;

      case 1:
        this.toastr.error("Hello, I'm the toastr message.", 'toast test', {

          progressBar: true,
          progressAnimation: 'increasing',
          closeButton: true,
          timeOut: 1000

        });
        this.counter++;
        break;

      case 2:
        this.toastr.info("Hello, I'm the toastr message.", 'toast test', {

          progressBar: true,
          progressAnimation: 'increasing',
          closeButton: true,
          timeOut: 1000

        });
        this.counter++;
        break;


      case 3:
        this.toastr.warning("Hello, I'm the toastr message.", 'toast test', {

          progressBar: true,
          progressAnimation: 'increasing',
          closeButton: true,
          timeOut: 1000

        });
        this.counter = 0;
        break;


    }
  }

  imgBefore : string | undefined;
  imgAfter : string | undefined;
  bsize : number | undefined;
  asize : number | undefined;
  compressImg()
  {
    this.imageCompress.uploadFile().then(({image, orientation}) => {
    
      this.imgBefore = image;
      console.warn('Size in bytes was:', this.imageCompress.byteCount(image));
      this.bsize = this.imageCompress.byteCount(image);
      
      this.imageCompress.compressFile(image, orientation, 50, 50).then(
        result => {
          this.imgAfter = result;
          console.warn('Size in bytes is now:', this.imageCompress.byteCount(result));
          this.asize=this.imageCompress.byteCount(result);
        }
      );
      
    });
    
  }






}
