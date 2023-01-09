var age = 10;
function onBodyLoad() {
    var _a;
    var age = "Pavan";
    var username = "Pavan";
    (_a = document.querySelector("p")) === null || _a === void 0 ? void 0 : _a.innerHTML = "Hello ! ".concat(username, " Welcome to TypeScript");
    printValue();
}

printValue();
function printValue() {
    console.log(age);
}
