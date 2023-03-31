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
      this.drivers.splice(this.drivers.indexOf(name));
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

const franck = new Passenger("Franck");
const lola = new Driver("lola");
const bob = new Driver("bob");
const james = new Passenger("James");
const sarah = new Driver("Sarah");


rideshareapp.addDriver(bob);
rideshareapp.addDriver(lola);
rideshareapp.addDriver(sarah);
james.sendRequest(rideshareapp);
franck.sendRequest(rideshareapp);
