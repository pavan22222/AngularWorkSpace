import { Component, OnInit } from '@angular/core';
import { Student } from '../dto/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'st-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  selectedCity:string;
  cities:string[]=[];
  studentList:Array<Student>=new Array();
  map:Map<Number,String>=new Map<Number,String>();


  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((data) => {
      this.studentList = data;
      });

    this.map.set(1,"Pavan");
    this.map.set(1,"Pavan");
    this.map.set(1,"Pavan");
    this.map.set(1,"Pavan");
    this.map.set(1,"Pavan");
    this.map.set(1,"Pavan");

    this.cities=["Mumbai","Hyderabad","Chennai","Vizag","Kerala"];
  }

}
