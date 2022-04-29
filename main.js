"use strict";
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
exports.__esModule = true;
var message = 'Welcome back';
console.log(message);
//Variable declaration
var x = 10;
var y = 20;
var sum;
var title = 'Nice';
//Variable Types
var isBeginner = true;
var age = 24;
var name = 'Yeameen';
var sentence = "Hi! My name is ".concat(name, ". I am ").concat(age, " years old.I am new to TypeScript");
console.log(sentence);
//Intellisence
// use age.  ,  name.
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
//Declaring an array type
var list1 = [1, 2, 3, 4];
var list2 = [1, 2, 3, 4];
//Tuple type - fixed no. of values with different types tuples are the way to go.
var info = [24, 'Yeameen'];
// E-num type
var Color1;
(function (Color1) {
    Color1[Color1["red"] = 0] = "red";
    Color1[Color1["green"] = 1] = "green";
    Color1[Color1["yellow"] = 2] = "yellow";
    Color1[Color1["pink"] = 3] = "pink";
})(Color1 || (Color1 = {}));
var c = Color1.yellow;
console.log(c);
var Color2;
(function (Color2) {
    Color2[Color2["red"] = 2] = "red";
    Color2[Color2["green"] = 3] = "green";
    Color2[Color2["yellow"] = 4] = "yellow";
    Color2[Color2["pink"] = 5] = "pink";
})(Color2 || (Color2 = {}));
var c2 = Color2.yellow;
console.log(c2);
// Any type
// const myVar: any = 10;
// console.log(myVar.name);
// console.log(myVar.age);
// myVar();
// myVar.toUpperCase();
// Unknown type
// const myVar: unknown = 10;
// function hasName(obj: any): obj is { name: string } {
//   return !!obj && typeof obj === 'object' && 'name' in obj;
// }
// if (hasName(myVar)) {
//   console.log(myVar.name);
// }
// (myVar as string).toUpperCase();
//Type Inference
var a; //Inference doesnt work where there is no initialization
a = 10;
a = true;
var b = 20;
//Multi type
var multiType;
multiType = true;
multiType = 20;
//Functions
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
console.log(add(5));
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: 'Sajjad',
    lastName: 'Yeameen'
};
fullName(p);
//Class
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName));
    };
    return Employee;
}());
var employee1 = new Employee('Yeameen');
console.log(employee1.employeeName);
employee1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log('Manager delegating tasks : ');
    };
    return Manager;
}(Employee));
var m1 = new Manager('Yeameen');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
//Access Modifiers
// public - public for free accessibility.
//private -  accessibilty only within the class.
//protected - accessibility within a class and the classes derived from it.
//Generics
function getArry(items) {
    return new Array().concat(items);
}
var numArry = getArry([1, 2, 3, 4, 5]);
var strArry = getArry(['john', 'smith', 'doe']);
numArry.push(10);
strArry.push('yeameen');
console.log(numArry.push());
console.log(strArry.push());
