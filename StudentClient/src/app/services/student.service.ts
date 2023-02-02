import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../dto/student';
import { encode, decode } from 'js-base64';

@Injectable({
  providedIn: 'any',
})
export class StudentService {

  baseUrl:string='http://localhost:8888/Rest-Application/student';

  constructor(private http:HttpClient) { }

  saveStudent(st:Student):Observable<number>{
    return this.http.post<number>(this.baseUrl+"/saveStudent",st)
  }



  getStudents():any{
    return this.http.get<any>(this.baseUrl+"/getStudentsByPagination?startIndex=10&lastIndex=10");
  }



}
