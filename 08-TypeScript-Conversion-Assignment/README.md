## TypeScript Conversion Assignment

### 1. Basic Object Method Logging

```ts
const person: { name: string; sayHi: () => void } = {
  name: "Alice",
  sayHi: function (): void {
    console.log(`Hi, my name is ${this.name}.`);
  },
};
person.sayHi(); // Logs: Hi, my name is Alice.
```

### 2. Losing `this` Context

```ts
const person: { name: string; greet: () => void } = {
  name: "Alice",
  greet: function (): void {
    console.log(`Hello, ${this.name}`);
  },
};
const greetFunction = person.greet;
greetFunction(); // Logs: Hello, undefined (in strict mode)

//Fix
const boundGreetFunction = person.greet.bind(person);
boundGreetFunction(); // Logs: Hello, Alice
```

### 3. Arrow Function Preserving `this`

```ts
const user: { name: string; logname: () => void } = {
  name: "Bob",
  logName: function (): void {
    setTimeout(() => {
      console.log(this.name); // Arrow function uses lexical `this`
    }, 100);
  },
};
user.logName(); // Logs: Bob
```

### 4. DOM Binding with Correct Context

```ts
    const User: { name: string; welcome: () => void } = {
        name: 'Alice';
        welcome: function (): void {
            console.log(`Welcome, ${this.name}!`);
        }
    };

    const button = document.getElementById('login') as HTMLButtonElement;
    button?.addEventListener('click', User.welcome.biind(User));  //bind(User) ensures this points to the User object when called.
```

### 5. Scope Shadowing`

```ts
let animal: string = "Cat";
function showAnimal(): void {
  let animal: string = "Dog";
  console.log(animal); // Logs: Dog
}

showAnimal();
console.log(animal); //Logs: Cat
```

### 6. Hoisting Behavior

```ts
function test(): void {
  console.log(a); // undefined (var is hoisted, not initialized)
  console.log(foo()); // 2 (function is hoisted)

  var a = 1;
  function foo(): number {
    return 2;
  }
}
```

### 7. var in Closures

```ts
for (var i = 0; i < 5; i++) {
  setTimeout(function (): void {
    console.log(i);
  }, 10);
} // Logs: 5, 5, 5, 5, 5 (same `i` captured in all closures)
// Fix: Use let i = 0 instead of var i = 0.
```

### 8. Closure Counter

```ts
function createCounter(): () => void {
  let count = 0;
  return function (): void {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
```

### 9. Arrow Function and Lexical `this`

```ts
    const myObject = {
        id: 'my-object',
        createLogger: function(): () => {
            return () => {
                console.log(`Logger for ${this.id}`);
            };
        }
    };

    const logger = myObject.createLogger();
    logger();    // Logs: Logger for my-object
```

### 10. Closure Example: `makeAdder`

```ts
function makeAdder(x: number): (y: number) => number {
  return function (y: number): number {
    return x + y;
  };
}

const add = makeAdder(5);
console.log(add(2)); // 7
```

### 11. Inheritance: Constructor/Prototype Pattern

```ts
function Animal(this: any) {}
Animal.prototype.eat = function (): void {
  console.log("Animal Eats");
};

function Dog(this: any) {
  Animal.call(this);
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function (): void {
  console.log("Dog Barks");
};

const myDog = new (Dog as any)();
(myDog as any).eat(); // Animal Eats
(myDog as any).bark(); // Dog Barks
```

### 12. Inheritance: ES6 Class Syntax

```ts
class Animal {
  eat(): void {
    console.log("Animal Eats");
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("Dog Barks");
  }
}

const myDog = new Dog();
myDog.eat(); // Animal Eats
myDog.bark(); // Dog Barks
```

---
