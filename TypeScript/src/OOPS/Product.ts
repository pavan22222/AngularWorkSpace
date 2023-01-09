
interface Product{
    productName:string;
    price:number;
    rating?:number;
    readonly available:boolean;

    totalNoOfProduct():number;
    printData():void;
}

abstract class Employee implements Product{
    productName:string;
    price:number;
    readonly available:boolean;

    abstract totalNoOfProduct():number;
    abstract printData():void;

}


abstract class Version{
    abstract send():void;
}

class versionImpl1 extends Version{
    send():void{

    }

    public constructor(){
        super();
    }
}

enum Constants{
    ASC,
    DESC,
    ORDER,
    NOTFOUND=404
}

console.log(Constants.ASC);
console.log(Constants.DESC);
console.log(Constants.ORDER);
console.log(Constants[404]);