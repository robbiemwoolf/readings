// advanced functions
// function expressions and arrow functions

// overview: in JavaScript you can write anonymous functions that don't have names but can still be called, one way to do this is by using arrow syntax

// terms
    // function expression: a function created in ap lace where there would otherwise be a value
    // anonymouse function: a function that doesn't have a name
    // arrow syntax: a way to write a compact function expression by using an arrow => to define the function

// arrow functions make it easier to see what's happening when there are lots of functions. They're also used frequently in higher-order functions, asynchronous code, and React

// different types of functions
    // there are two different ways to create functions:
        // function declarations
            // also called a function definition or function statement
            // JavaScript code that creates a new function with a name
        // function expressions
            // a function created in a place where there would otherwise be a value (may or may not have a name)

// Create a function that accepts a park object in the form { name: "Biscayne", rating: 4.2 } and returns "Excellent!" if the rating was greater than 4 and "Good" otherwise.
    // here are three different way to implement that same function:
        // function declaration
            function ratingAsText(park) {
                console.log("This is a function declaration.");
                return park.rating > 4 ? "Excellent!" : "Good";
            }
        // function expression
            const ratingAsTextNamed = function ratingToWord(park) {
                console.log("This is a function expression that has a name.");
                return park.rating > 4 ? "Excellent!" : "Good";
            }
        // Anonymous function expression
            const ratingAsTextAnonymous = function (park) {
                console.log("This is an anonymous function that does not have a name.");
                return park.rating > 4 ? "Excellent!" : "Good";
            }
        // if you want to call a function declaration you would use the name of the function along with the argument list
            ratingAsText(park)
        // the second function consists of two parts: (ratingAsTextNamed) and the function expression (ratingToWord(park)). The functin expression uses exactly the same syntax as a function declaration. The only difference is that the function is being assigned to a variable. You call this function with the variable you assigned it to
            ratingAsTextNamed(park)
        // the last function is anonymous and thus it does not have a name so it can be called with
            ratingAsTextAnonymous(park)
        
// arrow function
    const location = {
        name: "Arches",
        state: "Utah",
        geo: {
            lat: 38.68,
            lon: -109.57,
        },
    };

    const getLocation = function (location) {
        return location.state;
    }
    // the above function will return the state value of a given location object. Let's take a look at the function syntax:
        // the function keyword says we are creating a function
        // then we have the parameter list enclosed in ()
        // then we have the function body enclosed in {}
    // we can rewrite this with arrow syntax
        const getLocationState = (location) => {
            return location.state;
        }
        // we still have the parameter list enclosed in ()
        // then we have a fat arrow => that replaces the function keyword
        // then we still have the function body enclosed in {}

// important things to keep in mind when using an arrow function:
    // if there is only one parameter, the parenthesis () around the parameter are optional. 
        // so instead the function could be written like this
            const getLocationStateSingleParam = location => {
                return location.state;
            }
    // if the function consists of just a single return statement, you can omit the curly brackets {} and just have the arrow point to the value being returned
        // so we can drop the return and the {}, like this:
            const getLocationStatesSingleReturn = location => location.state;

// more examples
    const getLocationNameArrow = location => location.name
    // or with a function declaration
        function getLocationName(location) {
            return location.name;
        }

    // this next one has a long return value so to avoid using the return keyword we can put it in paratheses
        const getGoogleMapURLArrow = ({ geo: { lat, lon } }, zoom = 10) => (`https://www.google.com/maps/@${lat},${lon},${zoom}z`)
    // or with a function declaration
        function getLocationCoordinates({ geo: { lat, lon } }, zoom = 10) {
            return `https://www.google.com/maps/@${lat},${lon},${zoom}z`;
        }

// which is better?
    // there is no right answer
    // note: later we will learn tha reason we will have to use an arrow function is to do with the this keyword and something called execution context
        