import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent implements OnInit {
  mob:any;
  constructor() { }

  ngOnInit(): void {
  }


  getValue()
  {
    alert(this.mob);
    
  }
}
