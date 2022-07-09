// HEADERS

// terms
    //HTTP request method: Also called an HTTP verb, a method that indicates the desired action (such as deleting a resource) to be taken on a given resource
    // Header: Information that is included on the request and response, and generally includes metadata such as authorization information, cookies, and when the request happened
    // Request body: Information that is sent on a request that isn't included in the URL
    // Response body: Information sent back from the server
    // Status code: The part of the response that gives a quick indication as to how the request went
    

    //Although you may be used to seeing only the URL, web requests are actually much more complicated than just the URL. Both requests and responses allow for additional data to be sent back and forth, and this process is invisible to most internet users. This metadata is generally referred to as headers.

    // requests come from a client (such as Postman) and reach some kind of server (such as where Thinkful has stored its server)

    // each request contains an HTTP verb. Each verb ideally describes what kind of request is being made. There a five most common:
        // GET: retrieve information
        // POST: create something new
        // PUT: update something
        // PATCH: update part of something
        // DELETE: destroy something

    // the combination of HTTP verb and URL is sometimes called a route

    //status codes
        // a brief synopsis of how the request response cycle went. Status codes have a particular numbering system and associated messages
        // number range/response type/example
            //200s/successful/200-OK
            //300s/redirects/307-temporary redirects\
            //400s/client error/404-not found
            //500s/server error/503-service unavailable
        
        //statuscodes enable the program to make a quick decision based on just a number
        
//other headers
    //other values can be stored inside of the response


