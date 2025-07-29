// // What will this code log? Explain your reasoning.
// const person = {
//   name: 'Alice',
//   sayHi: function() {
//     console.log(`Hi, my name is ${this.name}.`);
//   }
// };
// person.sayHi();

// Output: Hi, my name is Alice.


// // What is logged to the console, and why? How would you fix it so it logs "Alice"?
// const person = {
//   name: 'Alice',
//   greet: function() {
//     console.log(`Hello, ${this.name}`);
//   }
// };
// // const greetFunction = person.greet;              // output: Hello, undefined
// const greetFunction = person.greet.bind(person);    // output: Hello, Alice
// greetFunction();


// // What will this code log and why?
// const user = {
//   name: 'Bob',
//   logName: function() {
//     setTimeout(() => {
//       console.log(this.name);
//     }, 100);
//   }
// };
// user.logName();
// // output: Bob


// // You have a User object with a method that logs a welcome message. There's also a "Login" button in your HTML. You want the welcome method to be called when the button is clicked, and the message should use the User object's data.

// const User = {
//   name: 'Alice',
//   welcome: function() {
//     console.log(`Welcome, ${this.name}!`);
//   }
// }
// // Hint: DOM APIs can be used
// document.getElementById("loginBtn").addEventListener("click", User.welcome.bind(User));


// // What will be logged to the console? Explain!

// let animal = 'Cat';
// function showAnimal() {
//   let animal = 'Dog';
//   console.log(animal);
// }
// showAnimal();
// console.log(animal);
// // Output: Dog Cat


// // What will this code output? Why?

// function test() {
//   console.log(a);
//   console.log(foo());
//   var a = 1;
//   function foo() {
//     return 2;
//   }
// }
// test();
// // Output: undefined 2 


// // Explain the output of this for loop.

// for (var i = 0; i < 5; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 10);
// }
// // Output: 5 5 5 5 5 


// // What will the following code log to the console on the last two lines? Explain why the count variable is not reset.

// function createCounter() {
//   let count = 0;
//   return function() {
//     count++;
//     console.log(count);
//   };
// }
// const counter = createCounter();
// counter();
// counter();

// // Output: 1 2

// // What does this code log? Explain!

// const myObject = {
//   id: 'my-object',
//   createLogger: function() {
//     return () => {
//       console.log(`Logger for ${this.id}`);
//     };
//   }
// };
// const logger = myObject.createLogger();
// logger();

// // output; Logger for my-object


// // Write a function makeAdder(x) that takes a number x and returns a new function. The new function should take a number y and return the sum x + y. Use a closure to achieve this.
// function makeAdder(x) {
//     return function(y) {
//         return x + y;
//     };
// }

// let add = makeAdder(5);
// console.log(add(2));

// // Output: 7


// // Implement a parent Animal and a child Dog relationship in two different ways:
// // Using the Constructor/Prototype pattern.

// // Parent
// function Animal() {}
// Animal.prototype.eat = function() {
//   console.log("Animal eats");
// };

// // Child
// function Dog() {}
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
// Dog.prototype.bark = function() {
//   console.log("Dog barks");
// };

// let d = new Dog();
// d.eat(); 
// d.bark(); 

// Using the ES6 class syntax.
class Animal {
    eat() {
        console.log("Animal eats.");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog barks.");
    }
}

const dog = new Dog();
dog.eat();
dog.bark();
