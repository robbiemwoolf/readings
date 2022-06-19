// UNDERSTANDING ERRORS

//when you don't understand an error message, search for the error code in Node's Errors documentation, https://nodejs.org/api/errors.html. If that still doesn't help, sites like Stack Overflow may give more information on the error code.

//system errors
    //a system error occurs when an application breaks a constraint set by the operating system (for example, opening a file that doesn't exist)

    //suppose you want to read a text file called idontexist.txt

    // Import JavaScript's fs library (used to read and write text files)
    const fs = require('fs')
    // Attempt to read the idontexist.txt file
    const content = fs.readFileSync("idontexist.txt")
    //take a look at the error message
    //system errors may include properties such as syscall, path, and errorno.
    //The essential properites that all errors need to have are the error code and the error message.

    //ENOENT
    //stands for Error No Entity(or No such file or directory): Commonly raised by fs operatins to indicate that a component of the specified pathname does not exist. No entity (file or dirctory) could be found by the given path.

    const fs = require('fs');
    fs.mkdirSync('temp_dir');
    //error message EEXIST means I am trying to do something to a file that already exists when it shouldn't

// ASSERTION ERRORS
    //they indicate a failure of an assertion. These types of errors are more commonly used in testing.
    //the code below uses the assert module to assert that 1 === 2
    const assert = require('assert');
    assert.strictEqual(1, 2);
    //obviously this throws an error message
    //AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
    //What does the Node documentation say about ERR_ASSERTION
        //"A special type of error that can be triggered whenever Node.js detects an exceptional logic violation that should never occur. These are raised typically by the assert module."
    //assertion errors can have actual, expected, and operator properties. The error message and the properties clearly indicate how the actual value differs from the expected value when using the strictEqual operator.

    //chai documentation https://www.chaijs.com/
    //assert API https://www.chaijs.com/api/assert/
    //BDD API https://www.chaijs.com/api/bdd/