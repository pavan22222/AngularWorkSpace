import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../dto/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'st-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  student:Student=null;
  constructor(private studentService:StudentService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const studentId=this.activatedRoute.snapshot.paramMap.get("id");
    if(studentId){
      this.studentService.getStudentById(studentId).subscribe(data=>{
        this.student=data;
      });
    }
  
  }

}
