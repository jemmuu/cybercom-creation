import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { testService } from '../services/test.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { notfound } from '../common/404-error';
import { allError } from '../common/allError';
import { combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';




@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {

  _post: any;


  constructor(private service: testService, private toastr: ToastrService, private router: ActivatedRoute) {

    // http.get(this.url)
    //   .subscribe(response => {

    //       this.post = response;

    //   })
    // should not declare in constructor becouse its heavy operation and constructor should be simple and short
  }

  ngOnInit(): void {
      // added function for getting parameter from the url and load data
                    // this.router.paramMap.subscribe(params => {

                    //   let id: number = Number(params.get('id'));
                    //   console.log(id);
                    //   //calling service for getting data
                    //   this.service.getData()
                    //     .subscribe(response => {

                    //       this._post = response;

                    //     });
                    // })

                    //   // getting query parameters from url path
                    // this.router.queryParamMap.subscribe(qparams => {

                    //   let page: number = Number(qparams.get('page'));
                    //     console.log(page);

                    // })

    //combin used for params and queryparams
    combineLatest([
      this.router.paramMap,
       this.router.queryParamMap
       
       ])
                                        .pipe(switchMap( combined => {

                                          let id = Number(combined[0].get('id'));
                                          console.log(id);
                                          //calling service for getting data
                                            //  this.service.getData()
                                            //  .subscribe(response => {
                                            //             this._post = response;});
                                          

                                          let page: number = Number(combined[1].get('page'));
                                          let order = combined[1].get('test');
                                          console.log(page);
                                          console.log(order)

                                          return this.service.getData();
                                        }


                                        ))

                                        //calling service for getting data using swichmap to avoid subscribe in subcribe
                                        .subscribe(combined => { 
                                          
                                          this._post = combined

                                          

                                          // let id = Number(combined[0].get('id'));
                                          // console.log(id);
                                          // //calling service for getting data
                                          //    this.service.getData()
                                          //    .subscribe(response => {
                                          //               this._post = response;});
                                          

                                          // let page: number = Number(combined[1].get('page'));
                                          // let order = combined[1].get('test');
                                          // console.log(page);
                                          // console.log(order)


                                        
                                        
                                        
                                        })



   }

  addData(input: HTMLInputElement) {
    let post: any = { title: input.value };
    this.service.addData(post)
      .subscribe((response: any) => {
        post.id = response.id;
        this._post.splice(0, 0, post);
        console.log(post.id);
        console.log(response.id);

      });

    input.value = '';


  }

  updateData(data: any) {
    this.service.updateData(data)
      .subscribe(Response => {
        let index = this._post.indexOf(data);
        console.log(index);
        this._post.splice(index, 1, Response);
        console.log(Response);

      },
        (error: Response) => {
          if (error instanceof notfound) {
            this.toastr.error("data is already deleted from th database please reload", 'error');
          }
          else throw error;
        })
  }


  deleteData(data: any) {
    this.service.deleteData(data.id)
      .subscribe(

        (response) => {
          let index = this._post.indexOf(data);
          console.log(response);
          this._post.splice(index, 1);

        },
        (error: allError) => {
          if (error instanceof notfound) {
            console.log(error);
            this.toastr.error("data is already deleted from th database please reload", 'error');
          }
          else throw error;

        })
  }





}
