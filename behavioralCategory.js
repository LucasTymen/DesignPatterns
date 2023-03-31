/*The Behavioral Category

Behavioral patterns streamline messages between unrelated objects in your code by delegating how objects can communicate.
They encapsulate the communication behavior to decouple messages between senders and receivers.

Behavioral Patterns include:

    Iterator
    Mediator
    Observer
    Visitor

Observer Pattern

On your favorite social media platforms, other users can follow your activity and be notified when you publish new
content. In the same vein, with the Observer Pattern, objects can have dependencies that “subscribe” to view changes to
another object. The notifications can flow in a one-to-many relationship, i.e. one changing object can notify many other
objects.
Implementation of the Observer Pattern

In the example, a basic model of the notification flow occurs between Account objects, which use the .addToFollowers()
and .removeFromFollowers() methods to subscribe other Account objects to its feed activity. In the real-world, you’re
more likely to use the Observer pattern across different types of objects to track changes of state, but the example
shows how updates can be pushed to other objects.

Here we create 3 account objects, a, b, and c. The a object uses its .addToFollowers() method to be ‘followed’ by the b
and c objects. Then, the a object publishes a new post, “Hello, world”. We can log the b or c object to see the post was
added to their feed property.
*/

class Account {
    constructor() {
        this.followers = [];
        this.feed = [];
    }
    addToFollowers(follower) {
        this.followers.push(follower);
    }
    removeFromFollowers(follower) {
        this.followers.splice(this.followers.indexOf(follower), 1);
    }
    publish(post) {
        this.followers.forEach(follower => follower.update(post));
    }
    update(post) {
      this.feed.push(post);
    }
}

let a = new Account();
let b = new Account();
let c = new Account();

a.addToFollowers(b);
a.addToFollowers(c);

a.publish("Hello, world");

console.log(a);
/* Output shows b and c objects listed in a's followers array:
[
  Account { followers: [], feed: [ 'Hello, world' ] },
  Account { followers: [], feed: [ 'Hello, world' ] }
]
*/

console.log(b);
// Account { followers: [], feed: [ 'Hello, world' ] }
/*

Mediator Pattern

If you’ve ever picked up a rideshare app to get a ride home, you may recall that you send a request through the app,
then the app “mediates” and assigns a driver to pick you up. You’re not directly calling a driver to pick you up. In
this same sense, the Mediator Pattern in code acts as a central interface to encapsulate how different parts of your
codebase can communicate with each other.

This pattern helps prevent having too many direct relationships between different classes or components and helps
disparate components know about changes in application state. As a benefit, it also makes your code more reusable and
easier to modify down the line since classes are not tightly coupled.
Implementation of the Mediator Pattern

In the example below, a Passenger object can send a request through a RideshareApp object, which acts as a mediator
between Driver objects and Passenger objects. The interface for the Passenger and Driver objects are simpler than what
you’d see in a real-world scenario and do not deal with the complexity of communicating between these two types of
objects. In fact, in our example, these two types of objects don’t need to know what instances exist.
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
