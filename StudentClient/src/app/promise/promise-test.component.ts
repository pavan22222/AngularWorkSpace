import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'st-promise-test',
  templateUrl: './promise-test.component.html',
  styleUrls: ['./promise-test.component.scss']
})
export class PromiseTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.generatePromise();
  }


  generatePromise(){
    const data=new Promise((resolve,reject)=>{
      console.log("this is promise")
      resolve("I am Done")
      reject("Got Error")
    })

    data.then(x=> console.log(x))

    data.then(x=> console.log(x))

  }

}
