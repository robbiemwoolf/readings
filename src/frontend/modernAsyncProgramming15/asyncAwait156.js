// modern async programming
// Async and Await

// overview: learn to how to use the async and await keywords. These keywords use promises but allow your async code to look more synchronous

// review of promises
    // promises manage async code
    // then() and catch() can be used to extract values from promises
    // different types of class methods
        // Promise.resolve()
        // Promise.reject()
        // Promise.all()
            // Promise.allSettled()

// the async and await keywords
    // the async keyword is applied to a function
        // the async keyword transforms the function so that when the function is invoked, the return value will be wrapped in a promise

            const axios = require("axios")
            const BASE_URL = "http://localhost:5000";
            
            async function getConstellation(id) {
                //> Placeholder function body
                return true;
            }

            getConstellation().then(console.log); //> true
        
        // async also gives you the ability to use the await keyword inside of your function body
    // what does the await keyword do?
            
        async function getConstellationNameById(id) {
            const url = `${BASE_URL}/constellations/${id}`;
            const { data } = await axios.get(url);

            return data.name;
        }

        getConstellationNameById("n2OEOzp").then(console.log); //> Libra

        // the await keyword allows you to treat asynchronous requests as if they were synchronous

            // using the await keyword before axios.get() forces the execution of the code to pause until that asynchronous operation is finished. Once it is, you can use then use the resolved response.

            // in the above code, the object returned by axios has a data key, which can then be immediately used. It can be accessed like any other object, without having to use then() and catch().

            // whatever comes after await should be a promise

// error handling
    // what happens when the promise is rejected?
        // instead of using catch(), the code will throw an error. This means that when you use async and await, you should also use try and catch, like so:
            async function getConstellationNameById(id) {
                const url = `${BASE_URL}/constellations/${id}`;
                try {
                    const { data } = await axios.get(url);
                    return data.name;
                } catch (error) {
                    throw `Constellation with id of ${id} could not be found.`;
                }
            }

            // if the GET request fails, the error will be caught, and a new, custom error will be thrown.

// caveats
    // awaiting asynchronous operations on their own
        // the below code DOES NOT WORK
            // async function getConstellationNameById(id) {
            //     const url = `${BASE_URL}/constellations/${id}`;
            //     try {
            //         return await axios.get(url).data.name;
            //     } catch (error) {
            //         throw `Constellation with id of ${id} could not be found.`;
            //     }
            // }
                // the code will not pause for axios.get(url) and then evaluate data.name. It will try as all at once and the operation will fail

    // returning awaited code
        // although it won't cause an issue, there is no need to return an awaited response.
        // there is no difference between returning a promise or returning an awaited promise
            // async function getConstellationNameById(id) {
            //     const url = `${BASE_URL}/constellations/${id}`;
            //     try {
            //     return await axios.get(url);
            //     } catch (error) {
            //     throw `Constellation with id of ${id} could not be found.`;
            //     }
            // }
                // in the above code, regardless of whether or not await is before the axios request, this function will return a promise. in fact, async is also unneeded here

// the async and await keywords are useful when you want to perform additional operations on the values returned from promises. So if you don't care about the return value in a specific function, you don't really need them.