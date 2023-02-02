import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../dto/student';

@Pipe({
  name: 'filter',
  pure:true
})
export class FilterPipe implements PipeTransform {

  transform(data: Student[],searchTerm:string): any {
    if(searchTerm == undefined)
      return data;
    else
      return data.filter(ele=> ele.city.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }

}
