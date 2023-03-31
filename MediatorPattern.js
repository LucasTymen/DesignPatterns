/*
Mediator Pattern

If you’ve ever picked up a rideshare app to get a ride home, you may recall that you send a request through the app, then the app “mediates” and assigns a driver to pick you up. You’re not directly calling a driver to pick you up. In this same sense, the Mediator Pattern in code acts as a central interface to encapsulate how different parts of your codebase can communicate with each other.

This pattern helps prevent having too many direct relationships between different classes or components and helps disparate components know about changes in application state. As a benefit, it also makes your code more reusable and easier to modify down the line since classes are not tightly coupled.
Implementation of the Mediator Pattern

In the example below, a Passenger object can send a request through a RideshareApp object, which acts as a mediator between Driver objects and Passenger objects. The interface for the Passenger and Driver objects are simpler than what you’d see in a real-world scenario and do not deal with the complexity of communicating between these two types of objects. In fact, in our example, these two types of objects don’t need to know what instances exist.
*/

class Passenger {
    constructor(name) {
      this.name = name;
    }
    sendRequest(rideshareapp) {
      rideshareapp.receiveRequest(this.name);
    }
}

class Driver {
    constructor(name) {
        this.name = name;
    }
    goOnline(rideshareapp) {
        rideshareapp.addDriver(this.name);
    }
}

class RideshareApp {
    constructor() {
      this.drivers = [];
      this.riders = [];
    }
    addDriver(name) {
        this.drivers.push(name);
    }
    updateDriverArray(name) {
        this.drivers.splice(this.drivers.indexOf(name), 1);
    }
    assignDriver() {
        // We will assume there are always more drivers than riders
        return this.drivers[Math.floor(Math.random(this.drivers.length))].name;
    }
    receiveRequest(passenger) {
        const driver = this.assignDriver();
        console.log(driver);
        this.sendNotification(passenger, driver);
        this.updateDriverArray(driver);
    }
    sendNotification(passenger, driver) {
        console.log(`${driver} is assigned to ${passenger}.`)
    }
}

const rideshareapp = new RideshareApp();

const james = new Passenger("James");
const sarah = new Driver("Sarah");

rideshareapp.addDriver(sarah);
james.sendRequest(rideshareapp);
