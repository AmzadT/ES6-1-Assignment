// Let and Const Keyword:

// let and const are used for variable declaration in JavaScript.
// let allows for variable reassignment, while const declares constants that can't be reassigned.

let number = 10;
number = 20; 

const name = "Amzad";
name = "Hussain"; // it will give the error...


// Arrow Function:

// Arrow functions are a concise way to write functions in JavaScript.
// They have a shorter syntax and lexically bind the this value.

var add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5


// Template Literals:

// Template literals allow embedding expressions inside strings using backticks (`).
// They enable easier string interpolation and multiline strings.

var Name = "Amzad";
console.log(`Hello, ${Name}`); // Output: Hello, Amzad


// Default Parameters:

// Default parameters allow setting default values for function parameters.
// If an argument is not provided, the default value is used.

var greet = (name = "Hello") => {
    console.log(`Hello, ${name}`);
  };
  
greet(); // Output: Hello, Guest
greet("World"); // Output: Hello, World
  



//   For...of Loop:

// for...of is used to iterate over iterable objects like arrays, strings, etc.
// It provides an easy way to loop through elements without explicitly using index values.

var numbers = [1, 2, 3];
for (var num of numbers) {
  console.log(num);
}
// Output:
// 1
// 2
// 3



// Object and Array Destructuring:

// Destructuring allows extracting values from objects or arrays into distinct variables.
// It provides a concise way to access and assign multiple values at once.

var person = { name: "Amzad", age: 23 };
var { name1, age } = person;
console.log(name1, age); // Output: Amzad 23

var [first, second] = ['apple', 'orange'];
console.log(first, second); // Output: apple orange



// Rest Parameter:

// The rest parameter (...) allows representing an indefinite number of arguments as an array.
// It gathers the remaining parameters into a single parameter.

var sum = (...numbers) => {
    return numbers.reduce((acc, num) => acc + num, 0);
  };
  
console.log(sum(1, 2, 3, 4)); // Output: 10
  


// Spread Operator:

// The spread operator (...) spreads iterable elements (arrays, strings) into individual elements.
// It can be used for array manipulation, function arguments, object merging, etc.

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]



// Classes:

// Classes in JavaScript are blueprints for creating objects with properties and methods.
// They provide a way to create objects using a constructor function and inheritance using extends.

class Person {
    constructor(name) {
      this.name = name;
    }
  
    greet() {
      return `Hello, my name is ${this.name}.`;
    }
}
  
var person = new Person("Amzad");
console.log(person.greet()); // Output: Hello, my name is Amzad.
  