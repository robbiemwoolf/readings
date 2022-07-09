// CREATING PROMISES

//the most popular way to manage asynchronous code in Javascript is through an object called a promise
// a promise can run async code and provide a set of methods that allows you to extract a single result from that code

//write some code to read a text file containing quotes, then randomly select one of the quotes and print it out for the user
    // link quotes folder

//PROMISES
    //In JavaScript, promises are a reliable way of knowing when asynchronous code has been completed.

    //a promise is a type of object that wraps around asychronous code. Promises won't run the callback function until needed, and they provide methods to extract the final result.

    // promises have three states:
        //pending state
            //when a promis is first created, it has a status of pending. For example, with fs.readFile(), the promise would be in the pending state during teh time that the file is being read
        //fulfilled state
            //when the promise has successfully finished running, it has a status of fulfilled. This means that is ready to pas back a value. In the fs.readFile() example, this is after the error and buffer are passed to the callback function.
        //rejected state
            //if something goes wrong, the promise changes to a status of rejected. This means that something failed. In this fs.readFile() example, if the first parameter, error, is truthy, that means that there was an error reading the file - so the promise should be rejected. The rejected status is especially likely to come up when you're making external web requests or reading files.

    //syntax
    
    const newPromise = new Promise((resolve, reject) => {
        //my code here...
    });

        //a new promise can be created using the new keyword with the Promise class. This will create an instance of a promise
        //promises can be assigned to variables
        //the only argument to pass in to the Promise constructor is a callback function that has two parameters: resolve and reject

        //new Promise pending
            //takes two paths
                //resolve(value) fulfilled
                //reject(error) rejected

function readFile(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (error, buffer) => {
        if (error) {
            return reject(error);
        }
        resolve(buffer.toString());
        });
    });
    }

    // readFile() returns a new Promise(). The promise takes a callback function with two parameters, resolve() and reject(), which are both functions

    //to fulfill the promise successfully, pass the final value that you want to extract from the promise to the resolve() function. 

    //the reject() function works the same way as resolve(), except that it is used when the asynchronous code has failed or gone wrong in some way.
    // in the above example, if error has a truthy value, the error is passed to the reject() function and the promise becomes rejected. 