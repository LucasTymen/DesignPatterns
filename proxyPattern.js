/*
Proxy Pattern

The Proxy Pattern protects access to an object by acting as a placeholder that intercepts and redefines the operations
of the target object. This pattern is particularly useful for things like network requests, as it can help avoid
redundant requests.

There is a Proxy object built into ES6 that can be used to implement the proxy pattern. This object has two parameters:

    target: the object that is being proxied
    handler: a definition of any custom behavior handled by the proxy object

If you use the Proxy() constructor with an empty handler, it would just behave like the target object. Proxy objects
have built-in handler function objects, which are called traps. Traps are used to call the target object.

Proxy objects are used alongside the Reflect object, which has methods with the exact same name as the Proxy object’s
traps. The difference is the Reflect methods forward default operations to the target object.

In the code example below, the get() trap is used to modify property access of the target object. On the other hand,
Reflect.get() is a static method that retrieves properties from the target object.

When you run the code below, the proxy will intercept the city1 property and return Montreal, Canada. However, when the
key is not city1, it will use Reflect.get() and return the original value, so proxy.city2 returns Mombasa, Kenya.

You can view a full list of available Proxy traps here.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming
*/

const target = {
    city1: "Marseille, France",
    city2: "Mombasa, Kenya"
};

const handler = {
    get: function (target, prop, receiver) {
        if (prop === "city1") {
            return "Montreal, Canada";
        }
        return Reflect.get(...arguments);
    },
};

const proxy = new Proxy(target, handler);

console.log(proxy.city1); // Montreal, Canada
console.log(proxy.city2); // Mombasa, Kenya
