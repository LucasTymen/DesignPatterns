/*
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
