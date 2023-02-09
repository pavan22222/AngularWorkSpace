import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Student } from 'src/app/dto/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'st-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  st:Student;
  message:string;

  constructor(private studentService:StudentService,private router:Router) { }

  ngOnInit(): void {
  }

  register(data){
    this.st=data;
    this.st.doj=new Date(this.st.doj);
    this.st.id="105";
    this.studentService.saveStudent(data).subscribe(data=>{
        this.message="Student Registered Successfully"
        //this.router.navigate(['login'])
    });
  }

}
