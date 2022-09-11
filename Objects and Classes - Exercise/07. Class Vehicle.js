class Vehicle {
    constructor(type, model, {engine, power}, fuel) {
        this.type = type;
        this.model = model;
        this.parts = {
            engine,
            power,
            quality: engine * power
        }
        this.fuel = fuel
 
    }
    drive(fuelConsumption) {
        return this.fuel -= fuelConsumption;
    }
}

