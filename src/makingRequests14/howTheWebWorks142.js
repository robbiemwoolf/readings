// how the web works
    //terms
        // URL: uniform resource locator, also called a uniform resource identifier, the way that distinct resources are identified on the web
        // DNS: domain name system, a service that acts as a lookup, translating a domain into an actual IP address
        // ISP: internet service provider, an entity that gives you access to the internet
        // client: a web-accessing device or software that requests information
        // server: a device or program that receives requests from clients and responds to them, acting as the brain of the backend
        // request-response cycle: the path that information takes from the client to the server and then back to the client
        // IP address: a unique series of numbers that represent a device connected to the internet and allows other devices to connect to it
    //anatomy of a url
        // https://www.youtube.com/results?search_query=how+the+web+works
            //protocol   https://
            //subdomain    www.
            //domain     youtube.com
            //path      /results
            //query      ?
            //parameters      search_query=how+the+web+works

    //each part of the URL helps the server determine what kind of information to send back to the client

    // process of making a web request
        // 1. your client (the browser) makes a request to a specific URL
        // 2. the client sends the domain name to the ISP
        // 3. the ISP looks up the IP address in the DNS
        // 4. the ISP sends the IP addresses back to the client
        // 5. the client opens a connection to the server located at the IP address. 
        // 6. the client sends a request to the server
        // 7. the server sends a response
        // 8. steps six and seven repeat until the browser has all of the resources that it needs