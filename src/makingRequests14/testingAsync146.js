// making requests
// testing asynchronous JavaScript

// overview: to keep your unit tests running quickly, your unit tests should avoid accessing external resources such as a remote servers and databases. So, in this lesson, you'll learn how to use Jest -- specifically Jest mocks -- to test asynchronous code

// unit tests test a small piece of code, generally a single function. 

// testing asynchronous code

    // you can use Jest to test various behaviours in your async code, including ensuring that methods are called with the correct arguments, and that any resolved or rejected promises are handled properly

        //while using the axios library, we learned that methods such as axios.get() and axios.post() return a promise. The promise can be handled within the then() method if the promise resolves successfully, or within a catch() method if the promise is rejected with an error

// in this class we log our error messages to the console. In a real app, you'd want to handle a failed request properly by showing an error message to let the user know what went wrong instead of just logging the error to the console.


//Jest mocks
    // mocking allows you to focus on the code being tested by controlling the behavior of any external dependencies in the code.
        // for example, you can use mocking to configue specific return values or capture calls to a function
            // that way, we can isolate the code being tested and remove the effects of external dependencies

    //for example, if the index() function internaly calls the axios.get() method and a test fails, how would you know why the test is failing? it it failing because the function is incorrectly implemented (which is what unit testing is meant to capture? Or is it failing because of some underlying isssues with the axios library (which is not what unit testing is meant to test)?

    // to address this issue, we can mock the methods in the axios library and configure the mock functions so that they always return specific values when called, as follows:
        jest.spyOn(axios, "get");
        axios
            .get.mockImplementation(() => Promise.resolve({ data: { greeting: "Hello World" } }));

    //jest.spyOn(axios, "get"); "spies on" or tracks calls to the axios module and returns a Jest mock function for axios.get(). 
    
    //The Jest mock function is also known as a spy; it allows you to spy on the behavior of the function that is called indirectly by some other code.

    //The next line calls axios.get.mockImplementation(). mockImplementation() accepts a callback that defines the implementation of the mock (that is, how it should behave under test). Here, the axios.get() mock returns a promise that always resolves to the { data: { greeting: "Hello World" } } object as the response

    // with this setup, the mocked function will be called whenever axios.get() is invoked in the test code

    // jest.clearAllMocks() is used to remove any mocks created in the current test, so that other tests won't be affected by the mocks. 
        // it is good practice to ensure that the state of one test is independent of other running tests and that the failing or passing of one test should not affect another test



// REFERENCE: starter-testing-async-javascript-main/
    // a lot of good information in there


// conclusion
    // Note that Jest also allows you to mock entire modules and even timers in your tests
        // https://jestjs.io/docs/jest-object#mock-modules
        // https://jestjs.io/docs/jest-object#mock-timers

        