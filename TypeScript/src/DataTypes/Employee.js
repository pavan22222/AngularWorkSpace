"use strict";
exports.__esModule = true;
//primitive data types
var id = 12;
var employeeName = "Pavan";
var active = true;
var salary;
var dob;
var stringValue = 'http:\\nlocalhost:8888\employee';
var wish;
console.log(wish);
Print();
function Print() {
    console.log("id=".concat(id, ",name=").concat(employeeName, ",active=").concat(active, ",").concat(stringValue));
}
//Arrays
var names = ["Pavan", 12];
names[12] = "Krishna";
var employeeNames = new Array("Pavan", "Krishna");
for (var property in names) {
    debugger;
    console.log("".concat(property, " [").concat(typeof property, "] - ").concat(names[property], " (").concat(typeof names[property], ")"));
}
for (var name_1 in names) {
    console.log(name_1);
}
for (var name_2 in employeeNames) {
    console.log(name_2);
}
//storing different type of values in array
var array = ["Pavan", [1, 2, "Krishna"], function add() { console.log("Hello"); return "Hi"; }];
console.log("".concat(array[0], ",").concat(array[1][2]));
console.log(array[2]());
console.log(array.toString());
console.log(array.join("$$"));
console.log(array.slice(0, 1));
var result1 = employeeNames.find(function (value) { return value === 'Pavan'; });
console.log(result1);
var result2 = employeeNames.filter(function (value) { return value.length > 3; });
console.log(result2);
var str = "Radha Krishna";
console.log(str.length);
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
for (var ele in array) {
    console.log(ele);
}
//push
/** It adds an element at the end */
names.push("Radha");
/** It adds an element at first index */
names.unshift("Mahadev");
/** It delete's elements from specified index and count and adds an elements from the specified index */
/** splice(index,count of element's to delete,new elements to add) */
names.splice(names.length - 2, 3, "Maha Khali", "Brahma");
console.log("......................................");
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var ele = names_1[_i];
    console.log(ele, names.indexOf(ele));
}
//Removing elements from an array
/**
 * pop - removes an elements at the end
 * shift - removes an elements at the first
 * splice - remove the element from the specfied index
 */
names.pop();
names.shift();
names.splice(3, 10);
console.log("...............................");
for (var _a = 0, names_2 = names; _a < names_2.length; _a++) {
    var ele = names_2[_a];
    console.log(ele, names.indexOf(ele));
}
//sorting
/**
 * sort()  -> asc order
 * reverse() -> reverse order
 */
names.sort(function (a, b) { return a.length > b.length ? -1 : a.length < b.length ? 1 : 0; });
for (var _b = 0, names_3 = names; _b < names_3.length; _b++) {
    var ele = names_3[_b];
    console.log(ele, names.indexOf(ele));
}
console.log("...............................");
names.reverse();
for (var _c = 0, names_4 = names; _c < names_4.length; _c++) {
    var ele = names_4[_c];
    console.log(ele, names.indexOf(ele));
}
//objects
var product1 = { "name": "Mobile", "price": 34000, "rating": { "rate": 3.5, "count": 230 } };
var product2 = { "name": "EarPhones", "price": 2000, "rating": { "rate": 4.5, "count": 30 } };
var product3 = { "name": "Charger", "price": 1000, "rating": { "rate": 3.1, "count": 80 } };
var product4 = { "name": "Mouse", "price": 400, "rating": { "rate": 5.0, "count": 110 } };
console.log("".concat(product1.name, ",").concat(product1.price, ",").concat(product1.rating.rate, ",").concat(product1.rating.count));
var products = [];
products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);
for (var _d = 0, products_1 = products; _d < products_1.length; _d++) {
    var product = products_1[_d];
    console.log("".concat(product.name, ",").concat(product.price, ",").concat(product.rating.rate, ",").concat(product.rating.count));
}
console.log(products[2].name);
var newProducts = products.slice(0, products.length);
//Dates
var dom = new Date();
console.log(dom);
var doe = new Date("2022-12-29");
console.log(doe);
var dod = new Date();
dod.setHours(100);
dod.setMonth(4);
dod.setDate(30);
dod.setHours(9);
dod.setMinutes(30);
dod.setSeconds(59);
dod.setMilliseconds(99);
console.log(dod);
