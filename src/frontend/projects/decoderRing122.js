// captsone: decoder ring

// try to use a Test Driven Development process

// learning objectives
    // write a series of unit tests using Mocha and Chai
    // use different expect() methods to test your code

// don't make any edits to the HTML or CSS files

// projects steps to complete
    // write code that passes all the tests in teh Qualified assessment in this lesson
    // write code that passes all the requirements outlined below, and submit your GitHub repo link to the Thinkful team in the next lesson

// requirements to pass
    // all tests are passing in Qualified

    // Caesar shift
        // example: caesar("Zebra Magazine", 3) => "cheud pdjdclqh")

        // it returns false if the shift value is equal to 0, less than -25, greater than 25, or not present

        // it ignores capital letters. (For example, the results of A Message and a message should be the same.)

        // when encoding, it handles shifts that go past the end of the alphabet. (For example, shifting z to the right by 3 should cause the z to wrap around to the front of the alphabet, so that z becomes c.)

        // it maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.

    // Polybius square
        // example: polybius("message") => "23513434112251"

        // when encoding, it translates the letters i and j to 42

        // when decoding, it translates 42 to (i/j)

        // it ignores capital letters. (For example, the results of A Message and a message should be the same.)

        // it maintains spaces in the message, before and after encoding or decoding

    // Substitution cipher
        // example: substitution("message", "plmoknijbuhvygctfxrdzeswaq") => "ykrrpik"

        // it returns false if the given alphabet isn't exactly 26 characters long

        // it correctly translates the given phrase, based on the alphabet given to the function

        // it returns false if there are any duplicate characters in the given alphabet

        // it maintains spaces in the message, before and after encoding or decoding

        // it ignores capital letters (For example, the results of A Message and a message should be the same.)


// two methods
    // String.from.charCode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
    // String.prototype.charCodeAt() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt