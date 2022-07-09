//Coverage

//code coverage tools will let you know which parts of your code are covered by tests, or at least lead you in the right direction

//How it works
    function assignGrade(score) {
        let result = "F";
    
        if (score > 0.9) {
        result = "A";
        } else if (score > 0.8) {
        result = "B";
        } else if (score > 0.7) {
        result = "C";
        }
    
        return result;
    }

//For the function above, there are 4 possible return values: A, B, C, F
//you want to increase your code coverage, by going over as many cases as possible
//code coverage tools work by looking at individual lines, functions, and paths taht code can take, and comparing those to what you test

//installing code coverage tools
    //add it to your dev dependency by running "npm i -D nyc" or "npm install --save-dev nyc"
    //under the scripts object in your package.json file update to "'test': 'nyc --reporter=text mocha test'" 

//run "npm test"
    //you will see a table displayed in the terminal with two rows: one for all files, and one for the src file you are testing. and each column describes a different topic that is being assessed by the tool. 

    //stmts refers to whether or not each individual statement of code (such as let result = 10;) was executed by tests
    //branch refers to whether or not each branch (for example, if/else) was executed by tests
    //funcs refers to whether or not each functin was executed by tests
    //lines literally refers to whether or not each line of code was executed by tests

//priortize branches
    //you can spend way too much time working on reaching 100%. instead you can focus specifically on increasing coverage of the Branch statements, because this is often the code that can break or cause unintended effects.
