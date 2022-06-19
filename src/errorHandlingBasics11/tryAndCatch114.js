// try and catch statements
    //You can use try...catch statements to stop errors before they stop your whole program. To do so, wrap the code that you want to handle in a try block, and then catch any errors that happen inside the try block. The syntax looks like this:
    try {
        throw new Error("Something went wrong");
      } catch (error) {
        console.log(`We handled the error: ${error}`);
      }
      //usually this approach is used to recover from possible errors - not ones that are guaranteed

    //here, an error is thrown if the number is too small. Otherwise, the number is printed without an error message. Either way, the function will continue to run and will not stop the execution of the program.
      function getRandomNumber() {
        // Math.floor(Math.random() * 100) generates a random number
        const randomNumber = Math.floor(Math.random() * 100);
        const min = 10;
        try {
          if (randomNumber < min) {
            throw `Random number is too small! ${randomNumber} is less than ${min}.`;
          } else {
            console.log(`The random number is: ${randomNumber}`);
          }
        } catch (error) {
          console.log(`An error occurred: ${error}`);
        }
      }
      //notice the catch statement includes accesss to the error that was thrown. That error is exactly what was thrown.

      //in the code below, error is being operated on as an array, because that is what was thrown
            try {
                throw ["one", "two", "three"];
            } catch (error) {
                const errors = error.join(", ");
                console.log(`Multiple errors: ${errors}`);
            }