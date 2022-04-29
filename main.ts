export {};
let message = 'Welcome back';
console.log(message);

//Variable declaration
let x = 10;
const y = 20;

let sum: any;
const title = 'Nice';

//Variable Types
let isBeginner: boolean = true;
let age: number = 24;
let name: string = 'Yeameen';

const sentence: string = `Hi! My name is ${name}. I am ${age} years old.I am new to TypeScript`;
console.log(sentence);

//Intellisence
// use age.  ,  name.

let n: null = null;
let u: undefined = undefined;

//Declaring an array type
let list1: number[] = [1, 2, 3, 4];
let list2: Array<number> = [1, 2, 3, 4];

//Tuple type - fixed no. of values with different types tuples are the way to go.
const info: [number, string] = [24, 'Yeameen'];

// E-num type
enum Color1 {
  red,
  green,
  yellow,
  pink,
}
const c: Color1 = Color1.yellow;
console.log(c);

enum Color2 {
  red = 2,
  green,
  yellow,
  pink,
}
const c2: Color2 = Color2.yellow;
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
let a; //Inference doesnt work where there is no initialization
a = 10;
a = true;

let b = 20;

//Multi type
let multiType: number | boolean;
multiType = true;
multiType = 20;

//Functions
function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}
console.log(add(5));

//Interface
interface Person {
  firstName: string;
  lastName: string;
}

function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: 'Sajjad',
  lastName: 'Yeameen',
};
fullName(p);

//Class
class Employee {
  employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`Good Morning ${this.employeeName}`);
  }
}
let employee1 = new Employee('Yeameen');
console.log(employee1.employeeName);
employee1.greet();

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }
  delegateWork() {
    console.log('Manager delegating tasks : ');
  }
}
let m1 = new Manager('Yeameen');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

//Access Modifiers
// public - public for free accessibility.
//private -  accessibilty only within the class.
//protected - accessibility within a class and the classes derived from it.

//Generics
function getArry<T>(items: T[]): T[] {
  return new Array().concat(items);
}
let numArry = getArry<number>([1, 2, 3, 4, 5]);
let strArry = getArry<string>(['john', 'smith', 'doe']);

numArry.push(10);
strArry.push('yeameen');
console.log(numArry.push());
console.log(strArry.push());
