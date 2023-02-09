
let ages=[12,33,123,12];
let employees=[
    {
        id:1,
        name:"Pavan",
        age:24,
        doj:new Date("2010-12-23")
    },
    {
        id:2,
        name:"Krishna",
        age:45,
        doj:new Date("2013-12-23")
    },
    {
        id:3,
        name:"Radha",
        age:42,
        doj:new Date("2017-12-23")
    },
    {
        id:4,
        name:"Teja",
        age:23,
        doj:new Date("2020-12-23")
    }
]

function sort(employees:any[]){
    employees.sort((emp1,emp2) =>{
       return new Date(emp1.doj).getTime > new Date(emp2.doj).getTime ? -1 :
       new Date(emp1.doj).getTime < new Date(emp2.doj).getTime ? 1 :0;    
    });
    console.log(employees)
}

function filter(employees:any[]){
   employees = employees.filter(emp => emp.name.length == 4);
   console.log(employees)
}

function findMax(employees:any[]){
    console.log(employees.reduce((a,b) => a > b ? a :b));
}




sort(employees);
sort(ages)
console.log(employees[0].doj.getTime())

console.log(employees[0].id)
filter(employees);
findMax(ages);








