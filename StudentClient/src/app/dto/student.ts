export class Student{

    private _id:string;
    private _name:string;
    private _city:string;
    private _pincode:number;
    private _fee:number;
    private _doj:Date;
    private _dob:Date;


    public set id(id:string){
        this._id=id;
    }

    public get id(){
        return this._id;
    }

    public set name(name:string){
        this._name=name;
    }

    public get name(){
        return this._name;
    }


    public set city(city:string){
        this._city=city;
    }

    public get city(){
        return this._city;
    }


    public set pincode(pincode:number){
        this._pincode=pincode;
    }

    public get pincode(){
        return this._pincode;
    }

    public set fee(fee:number){
        this._fee=fee;
    }

    public get fee(){
        return this._fee;
    }
    public set doj(doj:Date){
        this._doj=doj;
    }

    public get doj(){
        return this._doj;
    }

    public set dob(dob:Date){
        this._dob=dob;
    }

    public get dob(){
        return this._dob;
    }






}