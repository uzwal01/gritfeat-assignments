// Base interface for all vehicles
export interface Vehicle {
    drive(): void;
}


// Concrete vehicle classes
// ship
export class Ship implements Vehicle {
    drive() {
        console.log("Sailing on the sea..");
    }
}

// plane
export class Plane implements Vehicle {
    drive() {
        console.log("Flying in the air...");
    }
}

// truck

export class Truck implements Vehicle {
    drive() {
        console.log("Driving on the land...");
    }
}


// Factory Class
export class LogisticsFactory {
    public static createVehicle(logisticType: string): Vehicle {
        switch (logisticType.toLowerCase()) {
            case "sea logistic":
                return new Ship();

            case "air logistic":
                return new Plane();

            case "land logistic":
                return new Truck();

            default:
                throw new Error("Invalid logistic type");
                
        }
    }
}