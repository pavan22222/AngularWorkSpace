var versionImpl = {
    company: "",
    cons: [],
    versionName: ""
};
var product = {
    productName: "Mobile",
    price: 30000,
    available: true,
    totalNoOfProduct: function () {
        return 12;
    },
    printData: function () {
        console.log(product.productName, product.price);
    }
};
product.price = 34000;
console.log(product.totalNoOfProduct());
product.printData();
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
var st = new Student();
//console.log(st.studentName);
var employee = /** @class */ (function () {
    function employee() {
    }
    return employee;
}());
