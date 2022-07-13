/* TODO "dependencies": {
    "cross-fetch": "^3.1.2",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-router": "^5.2.0",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.1"
  } */


// Robust Server Structure 30

    // overview: In this module, you will learn how to build APIs using a set of constraints on how to route and return information from your API. You'll also learn to implement robust validation and error-handling techniques and organize your Express code in a modular manner.

    // Key questions to ask when creating an API:

        // How should you structure your API routes so that they're easy for other developers to understand and use?

        // How can you best structure your code to manage the complexity of the server architecture?

        // How can you properly validate requests to your API and return useful error messages for a variety of API issues?

        // How can you ensure that if a new developer joins the React team, they will be more or less familiar with the way that your API works?

// Static Data 30.2

    // overview: Many APIs use a database to store data or state. However, you can also use a static array or object to store data. You will build a basic text storage API for sharing code snippets or plain text.

// terms: 

    // application state: all the data that an application must keep track of in order to work

// Starter code starter-robust-server-structure-paste

// Static Data

    // Build a basic text-storage API (aka a pastebin API) that allows users to store code snippets and plain text to share with others.

        // For example making a request to /pastes should return something like this:

        [
            {
              "id": 1,
              "user_id": 1,
              "name": "Hello",
              "syntax": "None",
              "expiration": 10,
              "exposure": "private",
              "text": "Hello World!"
            },
            {
              "id": 2,
              "user_id": 1,
              "name": "Hello World in Python",
              "syntax": "Python",
              "expiration": 24,
              "exposure": "public",
              "text": "print(Hello World!)"
            },
            ...
        ]

        // Above, each object in the returned array represents the result of a paste.

        // The object contains an exposure property that is either public or private.

        // The object also contains a unique integer id, a name, the type of syntax, and the text itself.

        // All the data above can be accessed via a GET request to /pastes

        // GET http://localhost:5000/pastes

        // to get the data for a single paste just use the paste's id

        // GET http://localhost:5000/pastes/:pasteId

// State

    // State, as a general programming term, describes the status of something as big as an entire application or as small as an individual object.

    // The application state is all the data that the application must keep track of in order to work.

// Array As State

    // At this point, the starter code doesn't have anywhere to store the information on each paste.

// DO THIS: Create A pastes-data.js file
    
    // Add the following code:

    /*module.exports = [
  {
    id: 1,
    user_id: 1,
    name: "Hello",
    syntax: "None",
    expiration: 10,
    exposure: "private",
    text: "Hello World!"
  },
  {
    id: 2,
    user_id: 1,
    name: "Hello World in Python",
    syntax: "Python",
    expiration: 24,
    exposure: "public",
    text: "print(Hello World!)"
  },
  {
    id: 3,
    user_id: 2,
    name: "String Reverse in JavaScript",
    syntax: "Javascript",
    expiration: 24,
    exposure: "public",
    text: "const stringReverse = str => str.split('').reverse().join('');"
  },
  {
    id: 4,
    user_id: 3,
    name: "Print file sizes in Perl",
    syntax: "Perl",
    expiration: 24,
    exposure: "public",
    text: "ls -lAF | perl -e ’while (<>) { next if /^[dt]/; print +(split)[4], '\n' } ’"
  }
]; */

// Next, create an API endpoint that can access all of the paste data stored in src/data/pastes-data.js and return it to the user.

// DO THIS: Return All Pastes

    // add to app.js

    // reads, executes, and returns the exports object from the ./data/pastes-data file, assigning it to a variable
    const pastes = require("./data/pastes-data");

    // defines a handler for the /pastes path
    app.use("/pastes", (req, res) => {
        // tells Express to respond to the client with data in JSON format
        res.json({ data: pastes });
    });

// Why Use A Data Property?

    // Why did we return an object with a data property from your API rather than simply returning the array itself?

        // Because we are following a simplified version of the JSON:API specification, a common pattern for APIs returning JSON.

       // https://jsonapi.org/

    // In short, the APIs that we build will always return an object with either a data property or an errors property. 

    // Any information sent to the API will also be an object with a data property. 

// DO THIS: Return One Paste From /:pasteId
 
    // add before the app.use("/pastes") in app.js

    // defines a handler for the path
    app.use("/pastes/:pasteId", (req, res, next) => {
        // defines the pasteId variable by destructuring it from req.params
        const { pasteId } = req.params;
        // use find() method to search past by id, returns undefined if no id matches
        const foundPaste = pastes.find((paste) => paste.id === Number(pasteId));
      
        if (foundPaste) {
            // sends data with the foundPaste object to the client as JSON
            res.json({ data: foundPaste });
        } else {
            // calls next() with an error message to move the request to the error handler
            next(`Paste id not found: ${pasteId}`);
        }
    });

// SUMMARY:

    // static array or object data storage file example

    module.exports = [
        {
          id: 1,
          user_id: 1,
          name: "Hello",
          syntax: "None",
          expiration: 10,
          exposure: "private",
          text: "Hello World!"
        },
        {
          id: 2,
          user_id: 1,
          name: "Hello World in Python",
          syntax: "Python",
          expiration: 24,
          exposure: "public",
          text: "print(Hello World!)"
        } ...
    ]

    // returning all of the data example

    const pastes = require("./data/pastes-data");

    app.use("/pastes", (req, res) => {
        res.json({ data: pastes });
    });

    // returning a specific one example

    app.use("/pastes/:pasteId", (req, res, next) => {
        const { pasteId } = req.params;
        const foundPaste = pastes.find((paste) => paste.id === Number(pasteId));
      
        if (foundPaste) {
          res.json({ data: foundPaste });
        } else {
          next(`Paste id not found: ${pasteId}`);
        }
    });

    // Not found handler
    app.use((request, response, next) => {
        next(`Not found: ${request.originalUrl}`);
    });
  
    // Error handler
    app.use((error, request, response, next) => {
        console.error(error);
        response.send(error);
    });