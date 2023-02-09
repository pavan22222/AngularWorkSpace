import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {filter} from 'rxjs/operators'

@Component({
  selector: 'st-observable-test',
  templateUrl: './observable-test.component.html',
  styleUrls: ['./observable-test.component.scss'],
})
export class ObservableTestComponent implements OnInit {
  data: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.data = new Observable((listner) => {
      listner.next('Pavan');
      listner.next('Ramesh');
      listner.next(23);
      setTimeout(() => {
        listner.next(12);
      }, 1000);
      setTimeout(() => listner.next('Pavan'), 2000);
      setTimeout(() => listner.next(13), 1000);
      //listner.error("Invalid data");
      //listner.complete();
    });
  }

  async subscribe() {
    const x = await this.getData();
    console.log(x);
  }

  asyncCall() {
    console.log(this.getData());
    this.display();
  }

  display() {
    console.log('I am Display Method');
  }

  getData(){
    const data= this.http.get(
      'http://localhost:8888/Rest-Application/student/getStudentsByPagination'
    )
    const sub=data.pipe(
      filter((ele: any) =>ele.name == 'Rams'),
    ).subscribe((data) => {
      console.log(data);
    });
    sub.unsubscribe();
    data.subscribe((data) => {
      console.log(data);
    });

  }
}
