import { Console } from "console";

//primitive data types
let id:number=12;
var employeeName:string="Pavan";
var active:boolean=true;
var salary:null;
let dob:undefined;
let stringValue:string | undefined='http:\\nlocalhost:8888\employee';

var wish:string|undefined;
console.log(wish);

Print();

function Print() {
    console.log(`id=${id},name=${employeeName},active=${active},${stringValue}`);
}


//Arrays

let names:any[]=["Pavan",12];
names[12]="Krishna"
let employeeNames:any[]=new Array("Pavan","Krishna");


for(var property in names){
    debugger
        console.log(`${property} [${typeof property}] - ${names[property]} (${typeof names[property]})`);
    }

for(let name in names){
    console.log(name);
}

for(let name in employeeNames){
    console.log(name);
}


//storing different type of values in array

let array:any[]=["Pavan",[1,2,"Krishna"],function add():string{ console.log("Hello"); return "Hi"}]

console.log(`${array[0]},${array[1][2]}`);
console.log(array[2]())

console.log(array.toString())
console.log(array.join("$$"))
console.log(array.slice(0,1))

let result1 =employeeNames.find(value=>value === 'Pavan');

console.log(result1);

let result2 =employeeNames.filter(value=>value.length > 3);

console.log(result2);

var str:string="Radha Krishna";
console.log(str.length);

for(var i=0;i<names.length;i++){
    console.log(names[i]);
}


for(let ele in array){
    console.log(ele);
}

//push

/** It adds an element at the end */
names.push("Radha");
/** It adds an element at first index */
names.unshift("Mahadev");
/** It delete's elements from specified index and count and adds an elements from the specified index */
/** splice(index,count of element's to delete,new elements to add) */
names.splice(names.length-2,3,"Maha Khali","Brahma");


console.log("......................................")
for(let ele of names)
console.log(ele, names.indexOf(ele));

//Removing elements from an array

/**
 * pop - removes an elements at the end
 * shift - removes an elements at the first
 * splice - remove the element from the specfied index
 */

names.pop()
names.shift()
names.splice(3,10)

console.log("...............................")
for(let ele of names)
console.log(ele, names.indexOf(ele));

//sorting
/**
 * sort()  -> asc order
 * reverse() -> reverse order
 */
names.sort((a,b) => a.length > b.length ? -1 : a.length < b.length ? 1 :0);
for(let ele of names)
console.log(ele, names.indexOf(ele));
console.log("...............................")

names.reverse();

for(let ele of names)
console.log(ele, names.indexOf(ele));

//objects

let product1={"name":"Mobile","price":34000,"rating":{ "rate":3.5,"count":230}}
let product2={"name":"EarPhones","price":2000,"rating":{ "rate":4.5,"count":30}}
let product3={"name":"Charger","price":1000,"rating":{ "rate":3.1,"count":80}}
let product4={"name":"Mouse","price":400,"rating":{ "rate":5.0,"count":110}}
console.log(`${product1.name},${product1.price},${product1.rating.rate},${product1.rating.count}`)


let products:any[]=[];

products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);

for(let product of products){
    console.log(`${product.name},${product.price},${product.rating.rate},${product.rating.count}`)
}

console.log(products[2].name);

let newProducts=products.slice(0,products.length);


//Dates

let dom:Date=new Date();
console.log(dom);

let doe:Date=new Date("2022-12-29");
console.log(doe);

let dod:Date=new Date();

dod.setHours(100);
dod.setMonth(4);
dod.setDate(30)
dod.setHours(9)
dod.setMinutes(30)
dod.setSeconds(59)
dod.setMilliseconds(99)
console.log(dod);
