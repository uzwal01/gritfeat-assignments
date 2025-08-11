import { LogisticsFactory } from "./implementation";

const logisticTypes = ["Sea Logistic", "Air Logistic", "Land Logistic"];

logisticTypes.forEach(type => {
    const vehicle = LogisticsFactory.createVehicle(type);
    console.log(`Created Vehicle for: ${type}`);
    vehicle.drive();
});