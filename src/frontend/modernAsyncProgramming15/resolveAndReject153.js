// resolve and reject

// promises include class methods such as resolve() and reject(), which allow for you to write flexible asynchronous code

//returning similar types
    //take a look at the following function, which returns either a promise or a boolean

    const axios = require("axios");
    const BASE_URL = "http://localhost:5000";
    
    function update(id, body) {
      if (!id || !body) return false;
      const url = `${BASE_URL}/constellations/${id}`;
      return axios.put(url, body);
    }

//how might this function get used?

    const hydrus = {
        name: "Hydrus",
        meaning: "Water Snake",
        starsWithPlanets: 5,
        quadrant: "SQ1",
    };
    
    update("UPtAzfV", hydrus)
        .then(({ data }) => console.log(data))
        .catch(console.log);

// this will work just fine, unless the id or body parameters are missing. Like this:
    update("UPtAzfV")
    .then(({ data }) => console.log(data))
    .catch(console.log);
    //> Uncaught TypeError: false.then is not a function

    //because the function returns false, it isn't possible to call then() on that value. this means that the update() function now has three possible states:
        // an error occurs
        // a boolean is returned
        // a promise is returned

// ideally, functions should always return either an error or a consistent data type ( such as always returning a String), regardless of any conditions.
    // this function must include an option to return a promise. therefore, this functions should be changed so that it no longer returns a boolean.


// the resolve() and reject() methods
        function update(id, body) {
            if (!id || !body) return Promise.reject(false);
            const url = `${BASE_URL}/constellations/${id}`;
            return axios.put(url, body);
        }
    // Promise.reject() returns a promise with a status of rejected. Whatever is passed in a argument will be what is accessible in the catch() callback function.

    // with this update, the code would work as intended even if one of the arguments to update() wa missing
        update("UPtAzfV")
        .then(({ data }) => console.log(data))
        .catch(console.log); //> false

    // a similar class method is Promise.resolve()
        // this method will return a promise with a status of resolved. The argument passed to it will be accessible in the next then() statement

        Promise.resolve({ success: true }).then(console.log);
            //> { success: true }