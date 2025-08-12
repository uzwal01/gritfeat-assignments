// Component Interface
export interface Coffee {
    cost(): number;
    description(): string;
}

// Concrete Component
export class BasicCoffee implements Coffee {
    public cost(): number {
        return 5;   // base price
    }

    public description(): string {
        return "Basic Coffee";
    }
}

// Base Decorator
export abstract class CoffeeDecorator implements Coffee {
    protected coffee: Coffee;

    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }

    public abstract cost(): number;
    public abstract description(): string;
}

// Concrete Decorators
// For Milk
export class Milk extends CoffeeDecorator {
    public cost(): number {
        return this.coffee.cost() + 1.5;
    }

    public description(): string {
        return this.coffee.description() + ", Milk";
    }
}

// For Sugar
export class Sugar extends CoffeeDecorator {
    public cost(): number {
        return this.coffee.cost() + 0.5;
    }

    public description(): string {
        return this.coffee.description() + ", Sugar";
    }
}

// For WhippedCream
export class WhippedCream extends CoffeeDecorator {
    public cost(): number {
        return this.coffee.cost() + 2;
    }

    public description(): string {
        return this.coffee.description() + ", Whipped Cream";
    }
}