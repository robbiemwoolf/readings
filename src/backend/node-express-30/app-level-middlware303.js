// Node and Express 30

// Application-Level Middleware 30.3

    // overview: an Expres concept called application-level middleware will allow you to potentially configure every request coming in or going out of your server.

// terms:

    // middleware: a function that an Express server runs between receiving a request and responding to that request

// What Is Middleware?

    // A very general term that can have different meanings based on the concept.

    // When it's mentioned in this program, the term middleware will refer to a function that an Express server runs between receiving a request and responding to that request.

    // Remember that the job of the server is to receive requests and respond to them.

        // Middle gets between the request-response cycle.

    // Express puts multiple pieces of middleware together, creating a middleware pipline.

        // This pipeline is simply a series of functions.

// For example, imagine that a user is logging in to a banking website.

    // First, a request is made to the server for checking account details.

    // Next, the request enters the middleware pipeline

        // Act on the request
            // first the logging step, noting happens more than a simple log() statement describing the request
        // Help determine its outcome
            // then Check for user credentials. Depending on whether or not the user is logged in, the server will respond differently.

    // Lastly, if the user is logged in, you respond with the requested information. If they aren't logged in, you respond with an error. 

// Express Middleware Parameters

    const middleware = (req, res, next) => {
        // Middleware functin body
    };

    // Middleware functions are callback functions.

    // It is unlikely that you will ever call a middleware function directly --- Express calls the function for you, with the right arguments.

    // Almost every middleware function will have no more than three parameters.

        // The req parameter stands for request. Information and methods related to the incoming request will be stored in this object.

        // The res parameters stands for response. This objects has information and methods related to sending back a response from the server.

        // The next parameter, when called, will tell Express that this middleware function is complete. It will then go on to the next piece of middleware.

// Responsive Middleware

    const sayHello = (req, res, next) => {
        res.send('Hello!');
    };

    // Here, the middleware uses the send() method that comes on the res object. Calling send() in this way will send back the string to the client.

    // This middleware function responds. That is, it will send a response back to the client that made a request to it. At that point, your server's job is done.

// DO THIS: Copy The Middleware

    // include the sayHello() function in app.js

// Nonresponsive Middleware

    const logging = (req, res, next) => {
        console.log("A request is being made!");
        next();
    };

    // This middleware doesn't respond. Instead, all it does is print to the console before moving on to the next piece of middlware.

// DO THIS: Copy The Middleware

    // copy the logging() function into app.js

// Creating Application-Level Middleware

    // Now that your middleware functions exist we can utilize the use() method.

    app.use(logging);
    app.use(sayHello);

    // every request that comes in will first go through these lines of code unless an error occurs or the server sends a response.

// DO THIS: Test Out Your Middleware

    // use the logging() and sayHello() functions in app.js

    // NOTICE: if you switch the order of the two app.use() statements, you will still see Hello! but you will no longer see the console.log() statement

        // this is because there is no call for next() so you don't give it permission to move to the next middleware function

// The Morgan Package

    // This is a common package that can be used as middleware and will replace our logging function.

    // The morgan packages is a small logging package that will print useful information to your terminal window on each request.

// DO THIS: Use Morgan

    // first install with npm i morgan
    
    // require it
    const morgan = require("morgan");
    
    // next delete the logging function and replace it with:
    app.use(morgan("dev"));

    // exported from the morgan package is a function that can be called with a few predefined strings.

        // The return value of the function is middleware, configured by the "dev" string.

    // now we will still see the phrase Hello! but we will now see something like GET / 200 0.433 ms -6 in the terminal

        // This line is provided by morgan; morgan will log information requests.


// Summary

    // middleware interrupts the request-response cycle

    // a  middleware function takes in three arguments

        // req - info and methods related to the incoming request in this object

        // res - info and methods related to the sending information back from the server

        // next - when called says to move to the next middleware function in the pipeline

        const middleware = (req, res, next) {
            // middleware function body
        };

        // use the function 
        app.use(middleware);

    // Morgan is a small middleware library that we can use.

        // run npm i morgan

        // require morgan
        const morgan = require("morgan");

        // instead of a logging function we can use morgan to ouput GET / 200 0.433 ms -6 in the terminal
        app.use(morgan("dev"));