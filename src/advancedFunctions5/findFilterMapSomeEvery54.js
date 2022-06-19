// advanced functions
// Find, filter, map, some, and every

// overview: learn about other built-in array methods like forEach()

// methods
    // find() operates on an array and returns a single item
    // filter() operates on an array and returns a new array that matches the criterion
    // map() operates on an array of items and creates a new array of items the same size(maybe length is a better word) as the original array
    // some() operates on an array and returns a boolean value
    // every() operates on an array and returns a boolean value

// the find() method
    const parks = [
        { name: "Biscayne", rating: 4.2 },
        { name: "Grand Canyon", rating: 5 },
        { name: "Gateway Arch", rating: 4.5 },
        { name: "Indiana Dunes", rating: 4.1 },
    ];

    // before we would use a for loop to find an item within an array:
    let found = null;
    for (let i = 0; i < parks.length; i++) {
      const park = parks[i];
      if (park.name === "Biscayne") found = park;
    }
    console.log(found); //> { name: "Biscayne", rating: 4.2 }

    // we can extract the logic from this loop into a function. Take a look at the function below. This function, parkNameIsBiscayne(), accepts a single park object and returns true if the name of the park is "Biscayne" and false otherwise. We can then call that function in the loop

    const parkNameIsBiscayne = park => park.name === "Biscayne";

    let foundB = null;
    for (let i = 0; i < parks.length; i++) {
      const park = parks[i];
      if (parkNameIsBiscayne(park)) foundB = park;
    }
    console.log(found); //> { name: "Biscayne", rating: 4.2 }

    // above, we are using the loop to visit each element in the array and perform a comparison. If the comparison is true, we select that item from the array. If it never returns true then we don't select anything from the array

    // but we could also use a built-in array method to do this; the find() method encapsulates this functionality. 

    // with find(), you can provide a callback function that implements the comparison that you wish to perform. then, find() will apply this comparison to each element of the array

    let foundC = parks.find((park) => park.name === "Biscayne");
    console.log(foundC); //> { name: "Biscayne", rating: 4.2 }

    // the find() method uses the callback function to decide whether each item matches, and it does the rest of the work from the loop

    // find() returns ONLY the FIRST item that matches the condition, even if there are more matches. if there are none, it returns undefined.


// the filter() method
    // sometimes you'll want to build up a new list of items that meet a particular condition

    let result = [];
    for (let i = 0; i < parks.length; i++) {
    const park = parks[i];
    if (park.rating >= 4.5) result.push(park);
    }
    console.log(result); //> [ { name: "Grand Canyon", rating: 5 }, { name: "Gateway Arch", rating: 4.5 } ]

    // we can do this same thing with the filter() method

    // this methods builds a new array of only the items that match a certain condition.

    let resultB = parks.filter((park) => park.rating >= 4.5);
    console.log(resultB); //> [ { name: "Grand Canyon", rating: 5 }, { name: "Gateway Arch", rating: 4.5 } ]

    // so unlike the find() method, the filter() method returns more than a single item

    // NOTE: filter() returns a new array. The old array will still have the same items. If nothing matches the criterion then filter() will return an empty array


// the map() method
    // the loop below creates a new array that just contains the names of all of the parks
    const array = [];
    for (let i = 0; i < parks.length; i++) {
        array.push(parks[i].name);
    }
    console.log(result); //> [ "Biscayne", "Grand Canyon", "Gateway Arch", "Indiana Dunes"]

    // above the code processes each item in the array and creates a new value for each item in the original array. Each item in the original array MAPS to an item in the new array.

    // we can do this with the built-in map() method
    const arrayB = parks.map((park) => park.name);
    console.log(arrayB); //> [ "Biscayne", "Grand Canyon", "Gateway Arch", "Indiana Dunes" ]

    // the map() method uses the callback function to create the items for the new array. In this case, the code adds the park.name for each park to the new array

    // the map() method works in any situation where you want to transform each value of an array into another value

    // so how could we return an array of strings, where each string is the name of the park next to its rating?

    const newArray = parks.map((park) => `${park.name}: ${park.rating}`);
    console.log(newArray); //> ["Biscayne: 4.2", "Grand Canyon: 5", "Gateway Arch: 4.5", "Indiana Dunes: 4.1"];


// the some() method
    // sometimes, you'll just want to check if some condition is met in your array
    // the following code checks whether or not any of the parks have a rating of greater than 4
        let resultSome = false;
        for (let i = 0; i < parks.length; i++) {
        if (parks[i].rating > 4) resultSome = true;
        }
        console.log(resultSome); //> true

    // this can be done with the built-in some() method
        const resultSomeB = parks.some((park) => park.rating > 4);
        console.log(resultSomeB); //> true

    // this method is more efficient than the for loop shown above, in that it returns immediately as soon as the condition is met.
    // the some() method is useful for quick checks like this, and it's different from the other methods in this lesson in that it returns a boolean value instead of an array


// the every() method
    // at times, you may want to check whether every item in an array matches some condition
        const resultE = parks.every((park) => park.rating > 4);
        console.log(resultE); //> true

    // the every() method works by checking the condition given against every item in the array. If the condition ever fails, it will return false.


// iteration over objects
    // another way that you could store the parks data is with the following object:
    let parksObj = {
        "Biscayne": 4.2,
        "Grand Canyon": 5,
        "Gateway Arch": 4.5,
        "Indiana Dunes": 4.1,
      };

    // if we want to get all the keys in an object we can use Object.keys()
        Object.keys(parksObj); //> ["Biscayne", "Grand Canyon", "Gateway Arch", "Indiana Dunes"];

        // now that the keys are in an array, we can use the array methods that we have learned, like this:
            Object.keys(parksObj).filter((name) => {
                const rating = parks[name];
                return rating >= 4.5;
            }); // => ["Grand Canyon", "Gateway Arch"]

    // similar we can get all the values by using Object.values()

// DON'T FORGET TO RETURN!
    // all of these methods require that you return some value inside the callback function. 