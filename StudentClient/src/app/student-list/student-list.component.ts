import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../dto/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'st-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  titleName="Student Summary"
  studentList:Array<Student>=new Array();
  updatedStudentList:Array<Student>;
  errorMsg:string;

  filterList:Array<string>;


  constructor(private studentService:StudentService,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(data => {
      this.studentList = data;
      this.filterList = this.studentList.map((ele) => {
        return ele.city;
      });
      const temp:string[]=[];
      for(let i=0;i<this.filterList.length;i++){
        if(i == this.filterList.lastIndexOf(this.filterList[i]))
          temp.push(this.filterList[i])
      }
      temp.push('All');
      this.filterList=temp;
      this.updatedStudentList=this.studentList;
    },
    (err) =>{
      this.errorMsg=err.message;
    })
  }

  async showData(data):Promise<any>{
    alert(data)
    return data[0];
  }

  filterChange(filterName:any){
    if(filterName !== 'All')
      this.updatedStudentList=this.studentList.filter(ele=>ele.city == filterName);
    else{
      this.updatedStudentList=this.studentList;
    }
  }

}
