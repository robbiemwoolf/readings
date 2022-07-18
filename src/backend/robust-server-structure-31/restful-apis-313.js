// Robust Server Structure 31

// RESTful APIs 31.3

    // overview: learn how to use RESTful design principles to build robust APIs

// terms:

    // representational state transfer: REST, a set of constraints for builidng web APIs

    // RESTful API: A web API that adheres to the constraints of REST

    // HTTP request method: also called an HTTP verb, a method that indicates the desired action (such as deleting a resource) to be taken on a given resource

    // API endpoint: a location where a client can send a request to retrieve a resource that exists on the server

    // HTTP response status code: a code sent along with every HTTP response from the server, indicating the server's response to the client

// REST, which stands for representational state transfer, is a software architecture style. 

// REST is a set of constraints for building web APIs

// To get a better idea of how REST works, consider the following recipe for sandwiches:

    // A sandwich must contain at least one filling

    // A sandwich must contain at least two slices of bread

    // A sandwich must have one slice of bread on the top and one on the bottom

// This is a very flexible recipe, but is it even a recipe, or is it more like a set of constraints for sandwiches.

// REST is like the above recipe in that it establishes a set of patterns and constraints, but for web APIs.

// Representational State Transfer (REST)

    // With REST, if you have a URL, then you have a resource.

    // Resource refers to the data returned by a request; that data can be a text file, HTML page, image, video, JSON, or something else.

    // A RESTful API server provides access to resources. A client, like the browser or another server, can then access and change the resources.

    // Following RESTful design principles, each resource is identified by its URL.

    // REST uses various representations of a resource. For example, plain text, JSON, and XML are all valid representations. The most popular representations of resources are JSON and XML.

    // The HTTP protocol represents a resource as text in the body of a request or response. All data, even binary files, is represented in HTTP as text. The text may look like JSON, or even JavaScript, but it is always text.

    // HTTP Request Methods

        // How does the client tell the server what it wants? 

            // A combination of an HTTP request method and URL in the request tells the server what action it should take to fulfill the request.

        // An HTTP request method is a method that indicates the desired action (such as deleting a resource) to be taken on a given resource. Common examples include GET, POST, PUT, PATCH, and DELETE.

        // One of the aims of a RESTful API is to map HTTP request methods and CRUDL actions (create, read, update, delete, and list) together in a conventional pattern. 

    // Temporary State

        // The starter-robust-server-structure application stores all of its data in memory; the data isn't saved to a database or a file. As a result, any changes to the data will be lost when the application restarts. This is fine for now, and it's exactly what you should expect when storing data in memory. You will learn how to store the data in a database in a future module.

    // Express And HTTP Methods

        // So far, every route handler that you have written has used app.use(), which matches only on the optional path parameter.

        // But now that you know about HTTP methods, you will create API endpoints that also match on HTTP methods.

            // An API endpoint is a location where a client can send a request to retrieve a resource that exists on the server. It includes both the URL path and the HTTP method for the given URL path.

    // DO THIS Create A New Paste Record

        // Update the application to create a new paste record when the user adds the data by sending a POST request to /pastes.

            // To accomplish this, we need to do three things:

                // add middleware to parse incoming requests that contain JSON payloads

                // modify the existing handler for /pastes to handle only GET requests

                // create a new handler for POST requests to /pastes

        // Add near the top of app.js, this middleware must come BEFORE any handlers that will make use of the JSON in the body of the request

            app.use(express.json());

        // Update the existing handler for /pastes, by changing app.use(...) to app.get(...) we make it so that the handler will be called only if the HTTP method of the incoming request is GET.

        // Next, add the following POST handler after the GET handler:

        // Variable to hold the next ID
        // Because some IDs may already be used, find the largest assigned ID
        let lastPasteId = pastes.reduce((maxId, paste) => Math.max(maxId, paste.id), 0);

        app.post("/pastes", (req, res, next) => {
            const { data: { name, syntax, exposure, expiration, text, user_id } = {} } = req.body;
            const newPaste = {
                id: ++lastPasteId, // Increment last ID, then assign as the current ID
                name,
                syntax,
                exposure,
                expiration,
                text,
                user_id,
            };
            pastes.push(newPaste);
            res.json({ data: newPaste });
        });

    // Line 96 after app.post(... is still standard destructuring.

        // This way, if the body doesn't contain a data property, the destructuring will still succeed because you have supplied a default value of {} for the data property.

    // npm run dev, open Postman, and send a POST request to add a new paste result to /pastes

        // in postman, under the Headers tab, don't forget to set the value of Content-Type to application/json

            // otherwise, the server won't be able to properly interpret your request's JSON payload