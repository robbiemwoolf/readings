//Test-driven development walkthrough

//STEP 1: DETERMINE INPUTS, OUTPUTS, AND THE FUNCTION NAME
//input
[
    { name: "Shane Carey", score: 9.5},
    { name: "Rebecca Mills", score: 8.7},
];

//output - in this case it should be a single object that represents the student with the highest score, as follows:
{ name: "Shane Carey", score: 9.5}

//function name is next. use a descriptive name.
function highestScore()

//STEP 2: DETERMINE THE HAPPY PATH
//clearly state your function's purpose
//happy path refers to the common scenario for using a function; ignoring any exceptions or odd cases (such as a missing parameter)
//"When given an array of objects that each have a name and score key, the highestScore()function should return one of those objects that has the highest score value"

//STEP 3: WRITE THE SMALLEST TEST POSSIBLE
if (typeof highestScore === "function") {
    console.log("Test passed.");
} else {
    console.log("highestScore() is not a function.");
}
//this is just checking to see if the highestScore() function exists, in other words have you defined the function

//STEP 4: WRITE CODE TO MAKE YOUR TEST PASS
// in order to pass the above test we would write:
//function highestScore() {}
//note this doesn't solve the overall problem but it DOES pass the test

//STEP 5: REPEAT THE STEPS UNTIL YOU HAVE A SOLID TEST
/*  Check that the function returns an object
    Check that the function returns an object from the inputted array
    Check that the function returns the object with the highest score
*/
//So you would do each of these one-by-one and just continually repeat steps 3 and 4 until you get a final function and test that looks like this

//function being tested
function highestScore(students) {
    let result = null;
    let highScore = 0;
    for (let i=0; i < students.length; i++) {
        let student = student[i];
        if (student.score > highScore) {
            highScore = student.score;
            result = student;
        }
    }
    return result;
}

//setup phase
const input = [
    { name: "Shane Carey", score: 9.5},
    { name: "Rebecca Mills", score: 8.7},
];
const expected = input[0];

//run phase
const actual = highestScore(input);

//check phase
if (expected.name === actual.name && expected.score === actual.score) {
    console.log("Test passed.");
} else {
    console.log("highestScore() did not return the student with the highest score.");
}

//STEP 6: CONSIDER ALTERNATIVE CASES
//edge cases are often tricky and can include any number of scenarios that don't cover the happy path
/*  The list of students is undefined
    The list of students is empty.
    There is only one person in the list.
    There are two students tied for the highest score.
*/

//STEP 7: WRITE TESTS TO COVER EDGE CASES
//follow the same process as before for each edge case
//here is how the function might change for the edge cases
function highestScore(students) {
    let result = null;
    if (!students || !students.length) {
        return result;
    }
    let highScore = 0;
    for (let i=0; i < students.length; i++) {
        let student = student[i];
        if (student.score > highScore) {
            highScore = student.score;
            result = student;
        }
    }
    return result;
}

