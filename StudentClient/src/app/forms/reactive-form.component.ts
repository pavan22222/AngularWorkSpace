import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'st-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  formGroup:FormGroup=new FormGroup({
    "id":new FormControl(110),
    "name":new FormControl("Kohli",[Validators.required,Validators.minLength(5)]),
    "phoneNumber":new FormControl('',[Validators.pattern("[7-9]{1}[0-9]{9}"),Validators.required]),
    "email":new FormControl(undefined,[Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
    "doj":new FormControl(),
    "dob":new FormControl(),
    "fee":new FormControl(),
    "pincode":new FormControl(),
    "city":new FormControl()
  });

  nestedFormGroup:FormGroup=new FormGroup({
    "name":new FormControl("Pavan",[Validators.required]),
    "age":new FormControl(null,[Validators.required,Validators.min(0),Validators.max(90)]),
    "address":new FormGroup({
        "doorNo": new FormControl('',Validators.required),
        "state": new FormControl('',Validators.required),
        "gender":new FormControl(undefined,[Validators.required])
    })
  })

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
  }

  submit(formData){
    formData.doj=new Date(formData.doj)
    this.studentService.saveStudent(formData).subscribe(data=>{

    });
  }

  nextedSubmit(data){
    alert(JSON.stringify(data))
  }

  get phoneNumber(){
    return this.formGroup.controls.phoneNumber as FormControl;
  }

  get state(){
    return this.nestedFormGroup.controls.address.controls.state as FormControl;
  }

  get age(){
    return this.nestedFormGroup.controls.age as FormControl;
  }

  get email(){
    return this.formGroup.controls.email as FormControl;
  }


}
