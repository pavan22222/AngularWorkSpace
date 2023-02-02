import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'st-predefined-events',
  templateUrl: './predefined-events.component.html',
  styleUrls: ['./predefined-events.component.scss']
})
export class MouseEventsComponent implements OnInit {

  name:string;
  age:number;
  gender:string;
  city:string;

  constructor() { }

  ngOnInit(): void {
  }

  mouseOver(event){
    console.log("mouseOver:",event)
  }

  mouseOut(event){
    console.log("mouseOut:",event)
  }


  mouseUp(event){
    console.log("mouseUp:",event)
  }


  mouseDown(event){
    console.log("mouseDown:",event)
  }

  mouseMove(event){
    console.log("mouseMove:",event)
  }

  keyUp(name){
    console.log('keyUp',name);
  }

  keyDown(name){
    console.log('keyDown',name);
  }

  keyPress(name){
    console.log('keyPress',name);
  }

  click(){
    console.log('click')
  }

  doubleClick(){
    console.log('doubleClick')
  }

  contextMenu(){
    console.log('contextMenu')
  }

}
