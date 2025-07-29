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


// What will this code output? Why?

function test() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
test();
