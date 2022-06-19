// Promises
// resolving promises

// overview: learn how to resolve promises using callback functions 

    // now that we know how to create promises, you probably noticed that there is no way to determine the promise's state (pending, fullfilled, rejected). There is also no way to get the resolved value or rejected reason from the promise
    // when the promise is resolved, the callback function passed to then() is called, passing in the resolved value
    // when the promise is rejected, the catch() method is called passing in the rejected reason (error)

// extracting the resolved value
    // when a promise is created, the async operation inside will be fulfilled as quickly as possible
    // however, there are no methods or properties available to directly access teh resolved value of a promise
        const welcomePromise = welcome();
        console.log(welcomePromise); //> Promise { "Provide me a question and I'll give you an answer..." }

        // although you can see the final value stored inside of the welcomePromise variable in the above example, you aren't able to access the string inside
        // in other words, you only have access to the Promise object, not the string, because there are no methods or properties you can use to directly accesss the resolved value of a promise
            // thankfully, JavaScript's Promise object offers two methods -- then() and catch() -- that allow you to access the value of a fulfilled promise or the reason for a rejected promise


// the then() method
    // this method accepts a callback function that is called whenever the promise is fulfilled
        welcomePromise.then((result) => {
            console.log("The result is:", result);
        }); //> The result is: Provide me a question and I'll give you an answer...

        // because console.log() is a function, you can also just pass it into then() if you don't need to do anything extra. Example:
            welcome().then(console.log);  //> Provide me a question and I'll give you an answer...


// Remember, it's asynchronous!
    // it's important to remember that all work on the result of the promise must be done inside of the then() callback function.

// REFERENCE to the starter-promises-resolve-promises-master in the dothis folder
    
// use external variables
    // although you can only access the result of a promise inside of a then() function, you can use variables outside of its scope inside of the then() callback function


// the catch() method
    // earlier, the catch() method was described as a way to access the resolved value
        // if a value inside of a promise is rejected with the reject() function, it will skip the then() method until it finds a catch()

    // the catch() method is the error handler for a promise. Like try/catch blocks, if the catch() method doesn't throw an error, the calling method doesn't know that an error happened.
        // in other words, the promise returned by the catch() method is rejected only if the catch() throws an error or returns a promise which is itself rejected; otherwise, the promise is resolved.

    // for example, if no question is provided to the tell() function below, an error message will be passed into the reject() function.
        const tellPromise = tell()
        .then((result) => {
            console.log("Success:", result);
        })
        .catch((error) => {
            console.log("Failure:", error);
        });
    
        setTimeout(() => console.log(tellPromise), 500); 
            //> Failure: A question is required... 
            //> Promise { undefined }
        
        // in the above code, the tell() function has no question pased into it. Therefore, inside the tell() function, the reject() function is callled with an error message.

    // when a promise's state changes from pending to rejected, it skips over any then() methods to the next catch() method. Notice the the "Success:" message doesn't get called at all

    // the output above shows the promise is in the fulfilled state with a value of undefined (the catch() callback function returned undefined). While this may seem counterintuitive, it is exactly the same behavior as a try/catch block inside a function.


// Reorder then() and catch()
    // if a promise reaches a fulfilled state, the response goes to the next then(). And if a promise reaches the rejected state, the response goes to the next catch(). This is true regardless of order.
        // it is typical to put catch() statements at the end, but it isn't necessary


// Chain then() and catch()
    // you can keep chaining then() and catch() statements, until you accomplish the return result that you want.

    // when chaining multiple then() calls together, the value returned from a then() callback function is passed to the next then() callback function. If a then() callback function returns a promise, the promise is resolved before the next then() callback function is called. This continues until the last then() callback function is called. Because of this, you don't have to place then() calls inside of another then() call.
        welcome()
            .then(console.log) //> Logs the result of welcome()
            .then(goodbye) //> Returns promise from goodbye()
            .then(console.log) //> Logs the result of goodbye()
            .catch(console.error); //> Logs error from welcome() or goodbye()

    // however, if you want to combine the results of two or mor promises, you will need to nest then() calls to have access to the results of both calls.
        welcome()
            .then((welcomeMessage) =>
                goodbye().then((goodbyeMessage) => `${welcomeMessage}\n${goodbyeMessage}`)
            ) // welcomeMessage and goodbyeMessage combined.
            .then(console.log) // Logs combines messages
            .catch(console.error); // Logs error from welcome() or goodbye()  

    // important note: a then() or catch() will always move to the next then(). Therefore, if you place a then() call after a catch(), the next then() will always be called.
        // take a look:
            welcome()
                .then(console.log) // Logs the result of welcome()
                .then(tell) // Calls tell, which returns a rejected promise (no question supplied).
                .then(console.log) // Skipped because tell returned a rejected promise.
                .catch(console.error) // Logs error from tell() or welcome()
                .then(goodbye) // Returns promise from goodbye()
                .then(console.log) // Logs the result from goodbye()
                .catch(console.error); // Logs error only from goodbye()