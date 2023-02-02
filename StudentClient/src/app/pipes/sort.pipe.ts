import { Pipe, PipeTransform } from "@angular/core";
import { Student } from "../dto/student";

@Pipe({
    name:'sort',
    pure:true
})
export class SortPipe implements PipeTransform{


    transform(data: Student[],acs:boolean) {
        if(data && data.length > 0){
            if(acs)
                return data.sort((a,b) => a.name.charAt(0) > b.name.charAt(0) ? 1 : 
                     a.name.charAt(0) < b.name.charAt(0) ? -1 : 0 );
            else{
                return data.sort((a,b) => a.name.charAt(0) < b.name.charAt(0) ? 1 : 
                a.name.charAt(0) < b.name.charAt(0) ? 1 : 0 );
            }
        }

        return data;
           
    }
}