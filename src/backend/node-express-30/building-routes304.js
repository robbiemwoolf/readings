// Node And Express 30

// Building Routes 30.4

    // overview: create routes on your server so that it can respond to client requests with varied information

// terms:

    // route: also called a path, the part of the URL that comes after the domain name

// What Are Routes?

    // https://www.thinkful.com/bootcamp/web-development/flexible/

    // this route has multiple parts:
        // /bootcamp
        // /web-development
        // /flexible

    // The order of each of these parts matters in getting to the route.

    // In general, paths are arbitrary. But as you will see later on, there are some conventions to follow.

// Express Routes

    // We have used the app.use() method to build middleware to handle requests.

    // Express also has other methods to handle requests that correspond to the request's HTTP verb.

    // GET app.get()
    // DELETE app.delete()
    // POST app.post()
    // PUT app.put()

    // These functions work similarly to app.use()

    // For example, the following is a route in Express that will respond with the text OK when you go to the URL http://localhost:5000/ping.

    app.get("/ping", (req, res) => {
        res.send("OK");
    });

    // As you can see, this looks very similar to the middleware that you built earlier—except you now have a string as the first argument passed into the app.get() method. This builds a route at /ping.

    // Routes are middleware except they will only respond when the request URL matches the route.

// DO THIS: Create A Route

    // replace where we are using the sayHello() function with:
    app.get('/hello', sayHello);

    // if we test it, we see that before, the server was responding to every request with the sayHell0() middleware. Now, the server is only responding witht he sayHello() middleware when you go to the /hello route

    // Express returns an error when we go to http://localhost:5000, we will learn how to customize this later.

// Summary

    // build a route by passing it in as a string as the first argument when you are using the 
    
    app.get('/hello', sayHello); 