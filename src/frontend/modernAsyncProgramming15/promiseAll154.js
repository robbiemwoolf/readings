// modern async programming
// Promise.all
// overview: how to use Promise.all() to quickly display data from multiple requests

//Promise.all() makes it possible to send multiple requests and receive multiple responses at the same time
    // this will let you display data from multiple requests more quickly to the user

// Promise.all() takes an array of promises as an argument, and returns a single promise that resolves when all the promises passed to Promise.all() have resolved. 
    // since Promise.all() returns a promise you can chain a then() call after it
//     const axios = require("axios");
//    const BASE_URL = "http://localhost:5000";
//    const url = `${BASE_URL}/constellations`;
//    Promise.all([
//        axios.get(`${url}/UEUrlfX`),
//        axios.get(`${url}/zb8QvVt`),
// axios.get(`${url}/32TN5F8`),
//    ]).then(console.log);

    // here is how to access the data property of each result inside that array of objects:
    // const axios = require("axios");
    // const BASE_URL = "http://localhost:5000";
    // const url = `${BASE_URL}/constellations`;
    // Promise.all([
    //     axios.get(`${url}/UEUrlfX`),
    //     axios.get(`${url}/zb8QvVt`),
    //     axios.get(`${url}/32TN5F8`),
    // ]).then((results) => {
    //     console.log(results[0].data);
    //     console.log(results[1].data);
    //     console.log(results[2].data);
    // });

// note that the promise returned by Promise.all() will be rejected immediately if any one of the promises passed to Promise.all() is rejected. You can add a catch() call after then() to handle that contigency

// unknown number of promises
    // what if you need to make an unknown number of requests, and wait for all of them to resolve before doing something else?

    // for example, imagine that you want to build a function that takes in an array of IDs. For each of those IDs, a request will be made to get information about that record

    // you don't know how many IDs will be passed to the function. However, you can use each of those IDs to create an array of promises. Then, you can pass that array of promises to Promise.all(), which returns a promise that gets returned by the getConstellations() function. 

    const axios = require("axios");
    const BASE_URL = "http://localhost:5000";

    function getConstellations(ids) {
        const promises = ids.map ((id) => { //create an array of promises from the ids
            const url = `${BASE_URL}/constellations/${id}`;
            return axios.get(url); // each element in the array is a GET request
        });

        return Promise.all(promises) // pass array of promises to return a single promise that is resolved once all the requests resolve
    }

    const ids = ["KGQIwSq", "32TN5F8", "wrongid"];
    getConstellations(ids).then(console.log); // after all promises resolve then we are able to console.log

    // if any of the async requests fail, the entire getConstellations() function call will fail

    // Promise.allSettled() is an alternative to Promise.all() that always returns the result of each individual promise, including whether the promise was fulfilled or rejected.