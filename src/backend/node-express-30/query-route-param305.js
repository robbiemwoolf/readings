// Node And Express 30

// Query And Route Parameters 30.5

    // overview: learn how to use dynamic user input to modify your routes' response.

// terms:

    // query string: text that comes at the end of a URL and provides additional information to a given route

    // query parameter: a key-value pair in a query string, used to filter the resources requested from the server

    // route parameter: a part of the URL that changes depending on the data to be displayed on the webiste, used to access parts of a URL by storing the value in a variable

// Query Parameters

    // https://www.google.com/search?q=javascript

        // route called /search

        // a query string that contains a single query parameter

        // A query string is text that comes at the end of the a URL following question mark ?.

            // Can contain multiple query parameters

            // A query parameters is a key-value pair in a query string.

                // the key and the value are strings separated by an equal sign =.

        // query parameter key is q

        // query parameter value is javascript

    // query strings provide additional information to your route and can be easily read by Express.

    // inside of the route function, you can access query parameters by using req.query

        // this object will be empty if there are no parameters; otherwise, it will be an object of key-value pairs

    // For example,

    app.get('/songs', (req, res) => {
        const title = req.query.title;
        res.send(title);
    });

        // imagine we visit this URL:

        // http://localhost:5000/songs?title=Distant

        // we will receive Distant

// DO THIS: Use Query Parameters

    // Update your sayHello() function :

    const sayHello = (req, res) => {
        console.log(req.query); // logs object with key-value pair(s)
        const name = req.query.name; // value of key-value pair
        const content = name ? `Hello, ${name}!` : 'Hello!';
        res.send(content);
    };

    // go to this url http://localhost:5000/hello?name=Danni

    // Browser shows Hello, Dani!
    // Terminal shows { name: Dani }

// Route Parameters

    // Route parameters give you access to parts of a URL by storing the value in a variable.

        // This means that part of the route can be swapped out with another value and potentially work.
