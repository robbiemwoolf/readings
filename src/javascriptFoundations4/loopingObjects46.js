// looping over objects

//transforming objects into array
    //you are "cheating" bc instead of looping over an object you are actually transforming part of the object into an array
    // Object.values() and Object.keys() are two methods that allow you to cheat in this way
    const people = {
        "Lee Finch": { address: "913 Hunts Lane", isCustomer: true },
        "Whitney Shawna": { address: "392 Norfolk Street", isCustomer: false },
        "Gabrielle Mayo": { address: "934 Engert Avenue", isCustomer: false },
      };
    //accessing values
    const addresses = Object.values(people)
        //> [
        //>   { address: "913 Hunts Lane", isCustomer: true },
        //>   { address: "392 Norfolk Street", isCustomer: false },
        //>   { address: "934 Engert Avenue", isCustomer: false },
        //> ]
        // and now you can loop over the array
    //accessing keys
    const names = Object.keys(people);
        //> [ "Lee Finch", "Whitney Shawna", "Gabrielle Mayo" ];
    // although cheating in this way can be sufficient sometimes it'll be easier to loop through the object on its own. In those cases, we will use a for/in loop

// FOR/IN LOOPS
      //it loops through as many times as it takes to get every key in object
for (let name in people) {  //people is the entire object, name (variable name chosen by you it could be hippo) is every object key
    const person = people[name]; 
    const address = person.address;
    console.log(`Sending mail to ${name} at ${address}.`); 
    //> Sending mail to Lee Finch at 913 Hunts Lane.
    //> Sending mail to Whitney Shawna at 392 Norfolk Street.
    //> Sending mail to Gabrielle Mayo at 934 Engert Avenue.

  }     