import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'st-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  name:string;
  updatedProduct={
    id:1,
    name:'Mobile',
    price:2300
  }

  @Input('message') msg:string;
  @Input('product') product:object;

  @Output() submitMessage:EventEmitter<any>= new EventEmitter();
  @Output() submitObject:EventEmitter<any>= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(){
    this.submitMessage.emit(this.name);
  }

  sendObject(){
    this.submitObject.emit(this.updatedProduct);
  }

}
