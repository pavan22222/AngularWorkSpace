

 export interface Product{
    name:string;
    cost:number;
    type?:string;
    available:boolean;
}

export interface CanLeaveComp{

    canDeactivate:()=> boolean;
}