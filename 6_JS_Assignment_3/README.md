### What will this code log? Explain your REASONing.

```js
const person = {
  name: "Alice",
  sayHi: function () {
    console.log(`Hi, my name is ${this.name}.`);
  },
};
person.sayHi();
```

**_OUTPUT:_** `Hi, my name is Alice.`

**_REASON:_** This method is invoked using `person.sayHi()`, so `this` refers to the `person` object where `this,name` becomes `Alice`.

---

### What is logged to the console, and why? How would you fix it so it logs "Alice"?

```js
const person = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
};
const greetFunction = person.greet;
greetFunction();
```

**_OUTPUT:_** `Hello, undefined`

**_REASON:_**

- Logs undefined because `this` depends on how the function is called, not where it was defined.
- In `person.greet();`, `this` points to person, so `this.name` is `ALice`.
- But When we do:

```js
const greetFunction = person.greet;
greetFunction();
```

Now we're calling greetFunction() on its own — not through person.
So JavaScript doesn’t know what this should point to.

- In strict mode, this becomes undefined.
- In non-strict (sloppy) mode, it becomes the global object (which doesn't have .name).

That’s why we get undefined.

**_How to fix?_**

- We use `.bind(person)` so `this` stays locked to person.

```js
const greetFunction = person.greet.bind(person);
greetFunction(); // ✅ "Hello, Alice"
```

---

### What will this code log and why?

```js
const user = {
  name: "Bob",
  logName: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 100); // Added 100 milliseconds(0.1s) delay
  },
};
user.logName();
```

**_OUTPUT:_** `Bob`

**_REASON:_**

- Regular functions (like `function() {}`) get their own this, based on how they're called. But Arrow functions don’t get their own `this`. They inherit `this` from the place they were defined.
- Here, the arrow function is defined inside `logName()`. `logName()` was called as `user.logName()`. So `this` inside `logName()` points to `user`. And since the arrow function inherits `this`, it also points to `user`. Therefore, Result: `this.name` is `"Bob"`.

---

### You have a User object with a method that logs a welcome message. There's also a "Login" button in your HTML. You want the welcome method to be called when the button is clicked, and the message should use the User object's data.

```js
const User = {
  name: "Alice",
  welcome: function () {
    console.log(`Welcome, ${this.name}!`);
  },
};
// Hint: DOM APIs can be used
```

We can use:

```js
document
  .getElementById("loginBtn")
  .addEventListener("click", User.welcome.bind(User));
```

**_REASON:_**
We use `bind(User)` to ensure `this` remains bound to `User`. Otherwise, `this` would be the button element.

---

### What will be logged to the console? Explain!

```js
let animal = "Cat";
function showAnimal() {
  let animal = "Dog";
  console.log(animal);
}
showAnimal();
console.log(animal);
```

**_OUTPUT:_**
`Dog
Cat
`
**_REASON:_** `animal` inside `showAnimal` is a separate local variable due to block scoping via `let`.

---

### What will this code output? Why?
```js
function test() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
test();
```
**_OUTPUT:_**
`Undefined
2
`

