import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'st-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  childMessage:string;
  childObj:object;

  product={
    id:1,
    name:'Laptop',
    print:50000
  }

  message:string;

  constructor() { }

  ngOnInit(): void {
  }

  childMessageUpdated(msg){
    this.childMessage=msg;
  }

  childObject(obj){
    this.childObj=obj;
  }

}
