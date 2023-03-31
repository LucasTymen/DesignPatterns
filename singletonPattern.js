/*
Singleton Pattern

As the name implies, we use the Singleton design pattern when we need exactly one instance of a class. Often, it’s used
with the goal of managing global application state, but without using actual global scope. Singletons act as a shared
resource namespace with a single point of access for functions. You might be wondering when you’d only want a single
instance of an object. Here are a few real-world use cases:
https://www.codecademy.com/resources/docs/general/creational-design-patterns/singleton-pattern

    Thread pools
    Caches
    Logging options
    Configuration settings
    Browser load time impact of Singleton globally accessible variables vs real global variables (that was a mouth full)
    Database connections: reuse existing connections instead of creating new ones, which would increase application and
    database load

Note: Many of those options can also be handled with modules.

The single instance restriction is established through the way the class is implemented. A method can be written to
check if an instance already exists, and only return a new object if it doesn’t already exist.

Implementation of the Singleton Pattern

In the code snippet, we implement a Singleton class called Singleton. The constructor() is critical to the
implementation. In the code, we check if an instance property already exists. If not, we set that property. If it does,
we return the instance property. There is a method named .getInstance() defined as well — this is not necessary but
makes your code easier to reason with.

When you instantiate your instance of Singleton, you use the new operator when calling Singleton(). Given the code in
the constructor() method, you could theoretically always call your single instance as new Singleton() because it will
always return your original instance. However, by providing a .getInstance() method, you can instead call it as
Singleton.getInstance(), which is easier to understand and clearer in intent.
*/

class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance;
     }
     static getInstance() {
         return this.instance;
     }
}

const instance = new Singleton();
console.log(Singleton.getInstance()); // logs "Singleton {}"
