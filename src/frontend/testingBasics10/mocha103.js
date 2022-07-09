//unit testing with Mocha and Chai

//mocha is a testing framework; mocha tells you how to format your tests so that you can automatically run them
//with mocha, like most testing frameworks, you will be writing a function for every test
//chai is the assertion library (checks for equality between the actual and expected outputs from a function) that we will be using

//function will take an array of students with names and scores and return a number that represents the average score among all students
//this shows the happy path for the function
const input = [
    { name: "Shane Carey", score: 9.5 },
    { name: "Rebecca Mills", score: 8.7 },
    { name: "Catarina Lima", score: 9.7 },
];
averageScore(input); //> 9.3;

//PROJECT SETUP
// run "npm init -y" to create a package.json file with default values
// then install Mocha and Chai by running "npm install --save-dev mocha chai"
// you want to create a src folder to hold your various js files containg your functions
// you also need to create a tests folder to hold your test js files
// test file should include src file name and end in ".test.js"; for example: file containing function is in the src file and is named "main.js" so your test file will be within the tests folder and will be named "main.test.js"
// the bottom of your main function will need to have module.exports = function; where function is the name of the function you will be testing
// the top of your test file you will need to import the function you will be testing, in this format: 
    const function = require("../src/filename")
// you will need to update your json file by updating the "scripts" key to read { "test": "mocha test"}; this will allow you to run npm test

//WRITING A TEST
//the describe() function allows you to describe what you are testing; it takes in two arguments:
    /*  A string message explaining what is being tested, which is often the name of the function or topic
        A callback function that contains a set of individual tests for the function or topic
    */
    //think of describe() as a way to group a set of related tests together
    describe("averageScore", () => {
        //more will go here
    });
//the it() function is inside the describe() callback function and it defines the steps for testing your function. it takes in two arguments:
    /*  A string messge explaining a desired behavior of the function. Typically, these statements use the it() function name as part of a sentence
        A callback function that defines the steps for testing the desired behavior of your function
    */
    describe("averageScore", () => {
        it("should return the average score among all students", () => {
            //more will go here
        });
    });
    //the above example is a typical test case. It reads like a sentence and describes the happy path.
// the expect() function, within the it() function. tells the test to throw an error if the result is not expected
    //first, in your test file you must require the expect() function from the Chai package, like this:
        const expect = require("chai").expect;
    //this allows you to use the expect() function within you it() function
    //to compare two values are the same, use the chained method to.equal() with expect()
    expect(1+1).to.equal(2); // no error
    //that runs as expected but this next one doesn't
    expect(1+1).to.equal(1); // Error
//the entire passing test suite for this simple example would look like
const expect = require("chai").expect;

describe("Checking equality", () => {
    it("should return true if the equation is correct", () => {
        expect(1+1).to.equal(2); //No error
    });
});

//function will take an array of students with names and scores and return a number that represents the average score among all students
function averageScore(students) {
    let totalScore = 0;
    for (let i=0; i<students.length; i++) {
        totalScore += students[i].score;
    }
    return Number((totalScore / students.length).toFixed(1));
}

//go to mocha103.test.js to see formatting for a test file

module.exports = averageScore; //exports the averageScore globally
