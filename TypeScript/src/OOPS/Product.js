var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var Version = /** @class */ (function () {
    function Version() {
    }
    return Version;
}());
var versionImpl1 = /** @class */ (function (_super) {
    __extends(versionImpl1, _super);
    function versionImpl1() {
        return _super.call(this) || this;
    }
    versionImpl1.prototype.send = function () {
    };
    return versionImpl1;
}(Version));
var Constants;
(function (Constants) {
    Constants[Constants["ASC"] = 0] = "ASC";
    Constants[Constants["DESC"] = 1] = "DESC";
    Constants[Constants["ORDER"] = 2] = "ORDER";
    Constants[Constants["NOTFOUND"] = 404] = "NOTFOUND";
})(Constants || (Constants = {}));
console.log(Constants.ASC);
console.log(Constants.DESC);
console.log(Constants.ORDER);
console.log(Constants[404]);
