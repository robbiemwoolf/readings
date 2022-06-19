//error types

//three common error types:
    //Reference error: some variable being referenced doesn't r or can't be accessed
    //Syntax error: some part of the predefined js syntax is being used incorrectly
    //type error: you misuse a data type in js, meaning that an operation can't be performed

 //ReferenceError (your most common error), usely from misspellings
    const customerName = "Alfie Lee";
    console.log(customrName); //> ReferenceError: customrName is not defined
    //simple fix but when you have a big project it can be hard to find out what is going on, maybe try ctrl + F next time to find the word that is not defined
    console.log(customerName) //> "Alfie Lee";


//in order to find the SyntaxError: expected expression, got '}', we needed to properly space and indent this function that we could more easily see what is happening
    function openInstructions (weather, temperatureInCelsius) {
        if (weather && temperatureInCelsius) {
          if (weather === "sunny") {
            if (temperatureInCelsius > 20) {
                return "Set up the patio and put out umbrellas. Open indoor windows.";
            } else { 
                return "Set up the patios, umbrellas optional. Open indoor windows."; 
          } if (weather === "rainy") {
                if (temperatureInCelsius > 10) {
                    return "Open indoor windows slightly.";
                } else { 
                    return "Keep windows closed.";
                } }
          }
        } else {
          return "Please set the `weather` and `temperatureInCelsius` variables.";
        }
        }
        
        openInstructions("sunny", 18);

//type errors
price.trim(); //> TypeError: price.trim is not a function
//trim() function removes extra whitespace from the beginning and the end of a string
//what this error is likely telling you is that price isn't actually a string

//SILENT ERRORS
        function formatPrice(priceInCents) {
            let formattedPrice = "$" + (priceInCents / 100).setFixed(2);
            return formattedPrice;
            }
    //you may not notice any issues with this code right off the bat. And even when you run this code sample, no errors will surface. It is only when you invoke the function that you will see the error:
        // TypeError: (priceInCents / 100).setFixed is not a function
            //in this case setFixed() is NOT a function, instead it should be toFixed()

//check your code frequently like all the time