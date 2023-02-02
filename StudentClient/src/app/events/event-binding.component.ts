import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'st-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveClick(event){

    document.write(`id :${event.target.name}`)

  }


  updateClick(event:Event,name,ages:Array<any>,obj:object){

   console.log(event,name,ages,obj)
  }

}
