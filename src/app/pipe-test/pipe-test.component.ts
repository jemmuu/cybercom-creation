import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.css']
})
export class PipeTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tite : string = 'test pipe uppercase';
  lcase : string = 'test pipe lowercase';
  num : number = 255896.764;
   cur : number = 869.2;
   date = new Date(1999,7,25) ;




}
