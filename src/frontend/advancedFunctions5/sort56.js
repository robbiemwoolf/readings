// advanced functions
// sort

// overview: sorting is often a starting step when you're solving other problems. until we are ready to build our own sorting function, we can use JavaScript's built in sort() method

// basics of sort()
    // the sort() method takes a function and uses that function to sort an array based on the given criteria. 
    // for example, the function below sorts the parks based on the rating of each park
        const parks = [
            { name: "Biscayne", rating: 4.2 },
            { name: "Grand Canyon", rating: 5 },
            { name: "Gateway Arch", rating: 4.5 },
            { name: "Indiana Dunes", rating: 4.1 },
        ];
        
        parks.sort((parkA, parkB) => (parkA.rating > parkB.rating ? 1 : -1));
        console.log(parks);

        // you can see that the function passed in to sort() has two parameters
            // each parameter, on the first iteration, represents the first and second element of the array; the ratings are then compared for each park
        // if the number returned is negative, the first item (parkA) will be moved before the second item (parkB). the opposite is true if the number is positive.
        // then the iteration continues with the second and third items
        // if 0 is returned, the items won't change places

    // you might see a different format, particularly when sorting based on a number
        parks.sort((parkA, parkB) => parkA.rating - parkB.rating);
        console.log(parks);

    
// sorting strings
    // in JavaScript, we can compare strings with > and <
        "Biscayne" < "Grand Canyon"; //> true
    // it returns true because B comes before G
        "biscayne" < "Grand Canyon"; //> false
    // strings don't get compared alphabetically, instead they're compared based on their character value
        // lowercase values are worth more than uppercase
    // we can get around this by using the built-in method toLowerCase()
        parks.sort((parkA, parkB) =>
            parkA.name.toLowerCase() > parkB.name.toLowerCase() ? 1 : -1
         );
        console.log(parks);


// caveats for using sort()
    // be careful with sort(). It has several peculiarities that can lead to bugs. Here are a few to watch out for:
        // it expects you to return a negative number for items that should be earlier in the list, and a positive number for items that should be later in the list
        // it changes the array in place. In other words, it doesn't return a new array. It mutates the existing array. The parks dataset changed its order in the above example.
        // it has a default behavior if you don't pass in a function, but this default behavior might not be what you want
            // a look at the default behavior
                ["Biscayne", "grand canyon", "Gateway arch"].sort();
                //> [ 'Biscayne', 'Gateway arch', 'grand canyon' ]
            // this could be what you want, but it is almost always better to provide a function so that you can determine the effect of sort()