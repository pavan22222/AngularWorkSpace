import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'st-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.scss']
})
export class OneWayBindingComponent implements OnInit {

  isDisabled=true;
  imageUrl="lion.jfif";
  age:number=200;
  width="200px";
  height="300px";
  constructor() { }

  ngOnInit(): void {
  }

  change(){
    this.isDisabled=!this.isDisabled;
  }

 
}
