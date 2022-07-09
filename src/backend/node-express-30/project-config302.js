// Node and Express 30

    // overview: Build a fully working server with multiple routes and error handling

// Project Configuration 30.2

    // overview: run a simple server with Node and Express, and set up your development process for success by installing and using a package called nodemon

// terms

    // web frameworks: tools and software that help developers build web applications more easily

// What is Express?

    // A node package used to build servers; other frameworks work with Node and alternatively you could use just Node but Express makes the process both easier and more readable.

    // Express is a minimalist web framework for Node.js

    // express abstracts away many of the difficulties of working directly with Node

// DO THIS: Create A Project

    // create a folder called node-express-getting-started
    // run npm init -y
    // run npm install express@4

// File Structure

    // A fully functional server can often have dozens of files, all of which serve a different purpose.

    // Take time to name your files and folders well.

// DO THIS: Create Your Project

    // create a src folder and touch app.js server.js

    // The src folder holds the source code for your server. Code directly related to running the server will go here.

    // The app.js is where you will configure your Express application.

    // The server.js is where you will run your Express application.

// The Express Application

    // The following code initializes an Express application

    // require Express package and assign it to a variable
    const express = require("express"); 

    // the Express packages exports a function
    // invoke that function and you get a new Express applicationa and assign it to a variable
    const app = express();

    // export the Express application to be used in the server.js file
    module.exports = app;

// DO THIS: Create Your Application File

    // add the above code to your app.js file

// The Server File

    // responsible for running the application

    // The following code, when run, will allow your server to 'listen' on the specified port.

    // A port is a way to have multimple applications running on the same machine.

        // When a request goes to a computer, it will specify a port to ensure that it goes to a specific application.  

    // with destructuring and default arguments, set the variable PORT to be equal to whatever value is found inside of process.env or default to 5000
    const { PORT = 5000 } = process.env;

    // require the Express application that you exported
    const app = require('./app');

    // this function runs when the server successfully starts
    const listener = () => console.log(`Listening on Port ${PORT}`);

    // the listen() method is what runs the server
    // takes a port number and a function
    app.listen(PORT, listener);

// DO THIS: Create Your Server File

    // add above code to server.js

// Starting And Stopping

    // When you run your server, it will reserve the port that you specified. That means that nothing else can run on that port. When you stop the server, that port will be free again.

    // http://localhost:5000

// DO THIS: Start Your Server

    // in your project folder run node ./src/server.js

    // If you get an Error: listen EADDRINUSE: address already in use :::5000 error, you may need to change the port number because another application is already using port 5000.

    // To stop the server use ctrl+C

// Creating A Script

    // in your package.json file, replace the existing 'scripts' with the following:

    'scripts': {
        'start': 'node src/server.js'
    },

    // now you should be able to use npm start to run the server

// Run Multiple Servers

    // If you try to run a second instance of the server then you will receive an error message telling you the port is already in use, to run a a second instance of the server open run:

    // TODO: this did not work received error message: PORT=4999 : The term 'PORT=4999' is not recognized as the name of ...
    PORT=4999 npm start

// Make Changes To Your Server

    // Once your server is running, it will not pick up any new changes that you make to it unless you restart it.

    // Manually starting and stopping your server every time that you want to make changes to it would significantly slow down your development process. 

    // We can avoid this by installing a package called nodemon.

        // The nodemon package will watch for any changes that happen to your server and automatically reload it for you.

// DO THIS: Install nodemon

    //  run npm i nodemon --save-dev

    // Add nodemon To A Script

        // "dev": "nodemon src/server.js"

        // now you can use the following command:

        // npm run dev

// Now when you change the listener text it updates almost immediately.


// SUMMARY

// To create our project file we will run npm init -y and npm i express@4. 

// We will start will two files app.js (used to configure your server) and server.js (used to run your server)

// app.js
    // require Express and assign it to a variable
    const express = require('express');
    // call the function and assign to a variable
    const app = express();
    // export app to be used in server.js
    module.exports = app;

// server.js
    // user destructing and default values set the port value to whatever is inside the process.env
    const { PORT = 5000 } = process.env;
    // require app
    const app = requrie('src/app.js');
    // run the server with the listen method that takes a port number and a function as arguments
    app.listen(PORT, () => {console.log('Listening on port ${POR}!')});

// Could add scripts to use run npm start
    scripts: {
        "start": "node src/server.js"
    }

// But installing nodemon to automatically rerun the server with every change is much faster for development

    // run npm i nodemon --save-dev
    // add script
        scripts: {
            "dev": "nodemon src/server.js"
        }

    // now use npm run dev