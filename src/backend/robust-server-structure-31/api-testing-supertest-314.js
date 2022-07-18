// Robust Server Structure 31

// API Testing With SuperTest 31.4

    // overview: Build automated tests for an Express API uisng the Jest testing framework and an HTTP assertion library called SuperTest to ensure that your API continues to work as expected as the codebase grows.

// Jest and SuperTest

    // Jest is a JavaScript testing framework that includes both an assertion library and a test runner.

    // SuperTest allows you to programmatically make HTTP requests to your Express API.

// Testing The /pastes API Endpoints

// DO THIS: Install Jest And SuperTest

    // npm i --save-dev jest supertest

// Create app.test.js and add the following code

    const request = require("supertest");
    const pastes = require("../src/data/pastes-data");
    const app = require("../src/app");
const { expect } = require("chai");

    describe("path /pastes", () => {
    // Add tests here
    }); 

// Update package.json add script

    // {
    //     "scripts": {
    //       "test": "jest"
    //     }
    //   }

// Jest Refresher

    // describe(), which groups together a set of related tests

    // test() (or it()), which describes an individual test case and is typically nested inside of the describe() function

    // The expect object, which provides access to matchers (like toBe() and toEqual()) that allow you to check whether some part of your code has produced an expected outcome

// Setup And Teardown

    // Often tests involve some setup and teardown work that needs to be performed before and after tests run, respectively. For example:
    
        // Setup might involve initializing variables and opening file or database connections. 
        
        // Teardown might involve resetting variables, closing file or database connections, or even resetting the test database.

// DO THIS Add A beforeEach() Method

    // add a beforeEach() method in the describe block to reset the pastes data prior to running each test in the describe block, as follows:

    describe("path /pastes", () => {
        beforeEach(() => {
            pastes.splice(0, pastes.length); // clears out the pastes data
        })
    })

// Testing GET /pastes

    // Keep in mind that GET /pastes endpoint should return a 200 status code and a list of pastes.

// DO THIS: Create A Test For GET /pastes

    describe ("GET method", () => {
        it("returns an array of pastes", async () => {
            const expected = [
                {
                    id: 1,
                    user_id: 1,
                    name: "Hello",
                    syntax: "None",
                    expiration: 10,
                    exposure: "private",
                    text: "Hello World!"
                },
                {
                  id: 2,
                  user_id: 1,
                  name: "Hello World in Python",
                  syntax: "Python",
                  expiration: 24,
                  exposure: "public",
                  text: "print(Hello World!)"
                },
                {
                  id: 3,
                  user_id: 2,
                  name: "String Reverse in JavaScript",
                  syntax: "Javascript",
                  expiration: 24,
                  exposure: "public",
                  text: "const stringReverse = str => str.split('').reverse().join('');"
                }
            ]

            pastes.push(...expected);

            const response = await request(app).get("/pastes");

            expect(response.status).toBe(200);
            expect(response.body.data).lessThanOrEqual(expected);
        })
    })

        // Keep in mind that the callback function passed as a second argument to the test() method describes the steps for testing the API endpoint. First, an expected array is defined which contains a list of paste objects. Then, copies of the expected paste objects are added to the pastes array. Next, the test runs await request(app).get("/pastes") to send an API request to the GET /pastes endpoint, and the response of the asynchronous call is stored in a response variable. Finally, the test uses the expect() method in conjunction with the toBe() and toEqual() matchers to ensure that the response status code and response body, respectively, contain the expected results.

    // Run The Test

        // The purposefully break the test to make sure it is actually working as expected (for exampe, change the expected response status code from 200 to 201)

    // Run Test In Watch Mode

        // It's quite a hassle to have to manually restart the test every time that you make a change to your test code. So, run the tests in watch mode instead.

        // add script "test:watch": "jest --watch" to package.json

// Test POST /pastes
   
    // Keep in mind that the POST /pastes endpoint should create a new paste, assign an id, and return a 201 status code and the newly created paste.

// DO THIS: Create Tests For POST /pastes

describe("POST method", () => {
    it("creates a new paste and assigns id", async () => {
      const newPaste = {
        name: "String Reverse in JavaScript",
        syntax: "Javascript",
        expiration: 24,
        exposure: "public",
        text: "const stringReverse = str => str.split('').reverse().join('');"
      };
      const response = await request(app)
        .post("/pastes")
        .set("Accept", "application/json")
        .send({ data: newPaste });
  
      expect(response.status).toBe(201);
      expect(response.body.data).toEqual({
        id: 5,
        ...newPaste,
      });
    });
  
    it("returns 400 if result is missing", async () => {
      const response = await request(app)
        .post("/pastes")
        .set("Accept", "application/json")
        .send({ data: { message: "returns 400 if result is missing" } });
  
      expect(response.status).toBe(400);
    });
  
    it("returns 400 if result is empty", async () => {
      const response = await request(app)
        .post("/pastes")
        .set("Accept", "application/json")
        .send({ data: { result: "" } });
  
      expect(response.status).toBe(400);
    });
});

// Now you know how to test an Express API using Jest and SuperTest. Take a moment to think about any additional tests that you might add to test the API. For example, you could add a test to ensure that the GET /pastes/:pasteId endpoint returns the correct paste record or an appropriate error message if the pasteId doesn't exist in the records. You could also write a test to check that the API returns the correct error message for a nonexistent URL path (such as /asdfghjkl).