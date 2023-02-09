import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../dto/student';
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch"



@Injectable({
  providedIn: 'root',
})
export class StudentService {

  baseUrl:string='http://localhost:8888/Rest-Application/student';

  constructor(private http:HttpClient) { }


  saveStudent(st:Student):Observable<number>{
    return this.http.post<number>(this.baseUrl+"/saveStudent",st)
  }

  getStudents():any{
    return this.http.get(this.baseUrl+"/getStudentsByPagination?startIndex=10&lastIndex=10").
    catch((error)=>{
      return Observable.throw(error)
    });
  }

  getStudentById(studentId:string):Observable<Student>{
    return this.http.get<Student>(this.baseUrl+"/getStudentById?studentId="+studentId);
  }

  isAdminRole():boolean{
    return true;
  }

}
