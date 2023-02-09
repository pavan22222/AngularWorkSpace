import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'st-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  title="Log In Page"

  constructor() { }

  ngOnInit(): void {
  }

  submit(logInData){
    localStorage.setItem('currentUser',JSON.stringify(logInData));
    console.log(localStorage)
  }

}
