const expect = require("chai").expect;  //must require expect() function to be able to include it within the it() function
const averageScore = require("../src/mocha103.js"); //imports the averageScore function from the mocha103.js file

describe("averageScore", () => {
    it("should return the average score among all students", () => {
        const input = [
            { name: "Shane Carey", score: 9.5 },
            { name: "Rebecca Mills", score: 8.7 },
            { name: "Catarina Lima", score: 9.7 },
        ];
        const expected = 9.3;
        const actual = averageScore(input);
        expect(actual).to.equal(expected);
    });
});