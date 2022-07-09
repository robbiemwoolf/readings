//Unit testing with Jest

//jest documentation https://jestjs.io/docs/expect 

const { expect } = require("chai");

//Jest is a JavaScript testing framework that includes both an assertion library and a test runner.

//after setting up your directory and files, and creating a package.json file with "npm init -y" you need to install Jest as a development dependcy
//run "npm install --save-dev jest"
//update package. json "test": "jest"

//writing a test is very similar to that in Mocha and Chai

//REFRESHER
//describe() function allows you to group a set of related tests together
//it() function, which is typically nested inside of the describe() function, describes the steps for testing your function

// instead of the it() function you may encounter the test() function. They are aliases for one another, so they are exactly the same and are interchangeable

//expect() function in chai versus in jest
//chai
    expect(1+1).to.equal(2);
//jest
    expect(1+1).toBe(2);
//chai
    to.eql
//jest
    toEqual //compares objects

