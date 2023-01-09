interface Version_1{
    versionName:string;
    versionNo?:number;
}

interface Version_2 extends Version_1{
    company:string;
    cons:string[];
}

let versionImpl:Version_2={
    company: "",
    cons: [],
    versionName: ""
}



interface Product{
    productName:string;
    price:number;
   // rating?:{rate:number,count:string};
    readonly available:boolean;

    totalNoOfProduct():number;
    printData():void;
}

let product:Product={
    productName: "Mobile",
    price: 30000,
    available: true,

    totalNoOfProduct: function (): number {
       return 12;
    },
    printData: function (): void {
       console.log(product.productName,product.price)
    }
}

product.price=34000;
console.log(product.totalNoOfProduct())
product.printData();



class Student{
    private _studentName:string;
    private _id:number;
    private _ae:number;
    private _dob:Date;

    public constructor(){

    }
/* 
    public set studentName(studentName:string){
        this._studentName=studentName;
    }

    public get studentName(){
        return this._studentName;
    } */
}

let st = new Student();
//console.log(st.studentName);


let employee=class {

}


