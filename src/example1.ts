// TypeScript
function add(a: number, b: number): number {
    return a + b;
  }
  
  // Calling the function
  add(1, 2);

  function substract(a: number, b:number): number{
    return a-b;
  }

  // Type Declaration in TypeScript and Variables in TypeScript
// 1. Number: used for numeric values and floating-point value
let age: number = 28;
let weight: number = 65.22;

// 2. String - used for textual data. Defined using single quotes, double quotes, or template literals
let name: string = 'John Doe';
let greeting: string = 'Hello, ${name}';

// 3. Boolean - used for logical values. It can either be true or false.
let isAdult: boolean = true;
let isStudent: boolean = false;

// 4. object - used for complex data structures. Objects can have properties and methods.
let person: object = {name: 'John Doe', age: 30};
let date: object = new Date()
// 5. null - has only one value: null. Used when you want to explicitly set variable to have no value or object.
let emptyValue: null = null;
let anotherEmptyValue: null = null;
// 6. undefined - has got only one value: undefined. Used when a variable has been declared but a value has not been yet assigned.
let unassignedValue: undefined = undefined;
let anotherUnassignedValue: undefined = undefined;

// 7. symbol - used to create unique identifiers for objects
let symbol1: symbol = Symbol('symbol1');
let symbol2: symbol = Symbol('symbol2');

// 8. bigint: used fo<r whole numbers greater than 2^53, which is the upper limit for the number type.
let bigNumber: bigint = 9007199254740993n;
let anotherBigNumber: bigint = BigInt(9007199254740993);

// 9. any - used when the type of variable is anything. Used to escape type checking
let variable: any = 'I am a string';
variable = 42; // I'm now a number.

// Type Aliases
type Point = {
x: number;
y: number;
}

let originPoint: Point = {x:0, y:0};

// Intersection Types - combining multiple types into one
type Printable = {
  print: ()=> void;
};
type Logable = {
  log: ()=>void;
};

type logger = Printable & Logable;

let logger: logger = {
  print: ()=> console.log('Printing...'),
  log: ()=> console.log('logging...'),
}

// Union Types - used to define type that can take one of the several types
type ID = string | number;

let id: ID = '123';
id = 123;
// Type Assertions - used to tell TypeScript compiler you know more of a value than it does.
let value: any = 'Hello, TypeScript';
let stringLength: number = (value as string).length;
