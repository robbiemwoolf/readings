// WRITING ERRORS

//creating errors
    /* Review some different error types:
        ReferenceError: [name] is not defined
        TypeError: cannot read property '[name]' of undefined
        TypeError: [name] is not a function
        SyntaxError: Unexpected token
    */

//the throw keyword
    let secret = 42;
    let guess = 55;

    if (guess !== secret) {
    throw new Error("That's not the secret number!");
    }
    //when JavaScript sees throw, it stops running the code (similar to return) and "unwinds" the code. Then it then prints out error.

//backtraces
    //each line walkss backward through the functions that were called before the error, like this:
    function one() {
        two();
      }
      function two() {
        three();
      }
      function three() {
        throw new Error("Here's the error");
      }
      one();
      // the error reads as follows:
        /*  Error: Here's the error
            at three (test.js:29:9)
            at two (test.js:26:3)
            at one (test.js:23:3
        */
       // you see the error message itself, then each line tells you the name of the function and which line of the program this error came from

//error values
    //The new Error() syntax is a special syntax for creating objects. This syntax will not be covered in this lesson. However, you can throw anything, not just new Error('message'). Here are some examples:
    throw "here's what went wrong";
    throw 10;
    throw { message: "This a string in an object" };
    throw ["two", "message strings"];

//when to create errors
    //It is most useful to throw errors when a function is being used incorrectly. For example, if an essential parameter is missing, you may consider throwing an error. Here's an example:
    function checkSecretPassword(password) {
        if (!password) throw "No password given!";
        return password === "SECRET";
      }
      //if the password parameter is undefined, an error will be thrown. this will stop other member of your team (or your future self) from making the mistake of not including a password