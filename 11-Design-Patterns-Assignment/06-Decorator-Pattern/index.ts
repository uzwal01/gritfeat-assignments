import { Coffee, BasicCoffee, Milk, Sugar, WhippedCream } from "./implementation";

// Start with a basic coffee
let myCoffee: Coffee = new BasicCoffee();

// Add Milk
myCoffee = new Milk(myCoffee);

// Add Sugar
myCoffee = new Sugar(myCoffee);

// Add Whipped Cream
myCoffee = new WhippedCream(myCoffee);

console.log("Your Coffee:", myCoffee.description());
console.log("Total Cost:", myCoffee.cost());
