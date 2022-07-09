// advanced functions
// reduce

// overview: reduce() is a tool that generalizes the accumulator pattern that we learned earlier in this program

// the basics of reduce()
    // in the accumlator pattern, you use a loop to build up a new value. Each step of the loop gets one item from the array and combines it with an accumulator, like a running total
        const areas = [768, 1004.2, 433.1];
        let result = 0;
        for (let i = 0; i < areas.length; i++) {
            result += areas[i];
        }
        console.log(result); //> 2205.3
    
    // the reduce() method is another way to express the accumulator pattern
        // this method turns an array of values into a single value
        // it will pass each value into a function, step by step
        // the reduce() method will also pass in the return value from the previous step

        let resultB = areas.reduce((total, area) => total + area);
        console.log(resultB); //> 2205.3

    // the reduce() method takes two arguments:
        // a function
        // an optional starter value
    
    // in the above example the optional starter value isn't used
    // perhaps you wanted to start with an initial value

        let initialValue = 200;
        let resultC = areas.reduce((total, area) => total + area, initialValue);
        console.log(resultC); //> 2405.3
    
    // the function passed into the reduce() function is similar to the other functions that you've seen, except that it includes an additional parameter: the initialValue.
        // the initial value parameter represents the following:
            // on the first iteration, the accumulator value (total in the above function) is set to the second parameter (200 in the above function)
            // on every subsequent iteration, the accumulator value is set to whatever was returned from the previous iteration

        // so the above code works as follows:
            // The areas and initialValue values are defined.

            // The reduce() method takes a function that adds the accumulator and the current element. The first iteration will add 200 and 768.
            
            // The result of the first iteration will become the accumulator in the next iteration.
            
            // Once all iterations are finished, the value is stored in the resultC variable.
            
            // The resultC is logged out.


// add logging for better understanding
    let resultLog = areas.reduce((total, area, index) => {
        console.log(`index: ${index}`, `total: ${total}`, `area: ${area}`);
        return total + area;
    }, initialValue);
    console.log(resultLog);
        //> index: 0 total: 200 area: 768
        //> index: 1 total: 968 area: 1004.2
        //> index: 2 total: 1972.2 area: 433.1
        //> 2405.3

// remember the initial value is optional

// complex usage
    // the initial value that reduce() uses can be any data type, just like how the accumulator coulb be anything when you're using the accumulator pattern

    // this next example, accumulates array values into an object
        const parks = [
            { name: "Acadia", areaInSquareKm: 198.6 },
            { name: "Crater Lake", areaInSquareKm: 741.5 },
            { name: "Kenai Fjords", areaInSquareKm: 2710 },
            { name: "Zion", areaInSquareKm: 595.9 },
        ];
        
        const parkToAreasObject = parks.reduce((result, park) => {
            result[park.name] = park.areaInSquareKm;
            return result;
        }, {});

        /* //> {
                Arcardia: 198.6,
                'Crater Lake': 741.5,
                'Kenai Fjords': 2710,
                Zion: 595.9
               }        
        */

    // at each step in the function given to reduce(), a new key is created in the given object. The value assigned to that key is the areaInSquareKm value. Then, the overall object is returned so that it can serve as the accumulator (result) in the next iteration.
