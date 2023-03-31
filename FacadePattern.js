/*
Facade Pattern

The Facade Pattern is a single class that takes all of the complexity of a subsystem, and hides it. It is commonly used in JavaScript libraries and to simplify interactions with APIs. Use this pattern to create an easier interface for end users.

In the pseudo-code example below, the VideoConverter class provides access to the subsystem classes and is meant to direct client requests across the moving parts. The client would only interface with the VideoConverter class.
*/

class VideoConverter {
    constructor() {}
        convertNewVideo(...args) {
        // This method can interact with `Audio`, `Video`, `Codec`, and `Compression`
    }
}

class Audio {
    constructor() {}
    // complex subsystem code
}

class Video {
    constructor() {}
    // complex subsystem code
}

class Codec {
    constructor() {}
    // complex subsystem code
}

class Compression {
    constructor() {}
    // complex subsystem code
}
