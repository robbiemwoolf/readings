// JavaScript and the DOM
// Event listeners

// overview: The real power of JavaScript comes from responding to actions that the user takes on a web page. These actions are called events, and you can listen for these events and handle them to create an interactive experience for the user.

// Reference 
    //thinkful/dothis/starter-national-parks/ folder.

// terms
    // event: an action or occurrence that happens in the browser
    // event handler: a function that is executed in response to an event occurring
    // event listener: a mechanism that detects an event and contains an event name and an event handler


// Event
    // Actions, called events, all occur in response to some action that you are taking. 
    
    // An event is an action or occurrence that happens in the browser.The system fires an event when certain actions occur.

    // There are many different types of events, here are some examples:
        // mouse movement, clicks, or dragging
        // typing on the keyboard
        // touching and swiping on a touch screen device
        // resizing the browser window
        // closing the browser window or tab
        // submitting a  form
        // the web page finishing loading

    // event documentation
        // https://developer.mozilla.org/en-US/docs/Web/Events

    // You can respond to these events by writing a function that will run when the event fires. These functions are called event handlers.

    // event listener
        // When you create an event handler, you need to associate it with an element in the DOM.

        // For example, the user may click a button. You then register an event handler on the button to run when the button's click event fires.

        // The mechanism that detects the even is called an event listener.

        // The event listener contains an event name and an event handler. When the event fires, the event handler is executed.

        // To create event listeners, use the addEventListener() method. This method takes two arguments:
            // the name of the event
            // an event handler

        // Add event listener to a button
            const firstBtn = document.querySelector("button");

        // then call the addEventListener() method on this button
            firstBtn.addEventListener("click", (event) => {
                console.log("You clicked the button", event);
            });

            // the event handler accepts a single parameter representing an event object. This event encapsulates some details about the event that occurred.

        // Details about the event
            // the event object that is passed to the event handler contains some information that you can use while handling the event. The event object is automatically passed to event handlers when they are invoked. They contain information relevant to the event itself.

            // for example, you can get the specific element that fired the event with the target property of the event object, as shown here:

            firstBtn.addEventListener("click", (event) => {
                console.log(event.target);
            });

            // this is especially useful when you attach the same handler to multiple elements. For example, you may want to highlight a park when the button associated with that park is clicked. You could attach the same event handler to each of these buttons. Take a look:

            // Select all the buttons for all the parks
                const allBtns = document.querySelectorAll(".rate-button");

            // Iterate through the list of buttons and add an event handler to each
                allBtns.forEach((btn) => {
                    btn.addEventListener("click", (event) => {
                    console.log(event.target.parentNode);
                    });
                });
            // how do you know which park belongs to the button that was clicked?

            // The <section> element that represents a park is the parent of the button. Because event.target refers to the button that was clicked, then using the parentNode property of that button will get you the <section> element that was clicked.

            // Notice that each time you click the button, the <section> element in which that button resides is logged to the console. You can then manipulate this element in any way that you wish. For example, the following code changes the background color:

            allBtns.forEach((btn) => {
                btn.addEventListener("click", (event) => {
                  const park = event.target.parentNode;
                  park.style.backgroundColor = "#c8e6c9";
                });
            });


// A Complete Example
    
    // You want to give the user the ability to sort the list of parks displayed on the page, you want them to be able to sort by either name or rating.

    // You can add two links and allow the user to click whichever one they wish.

    // Get the list of parks from the DOM, perform a sort on the list, and  insert the parks back into the DOM in the new order

        // start by adding this between the <header> and the <main> on index.html
            
            <div class="sorter">
                Sort by:
                <a href="" class="sort-link" id="name-sorter">Name</a>  |
                <a href="" class="sort-link" id="rating-sorter">Rating</a>
            </div>

        // optionallly, you could ass some CSS to the style.css file

            .sorter {
                width: 90%;
                margin: 0 auto;
                padding: 6px;
            }

        // Add an event listener to the link. Build this in steps so that it is clear what each step does. The following code all goes in index.js.

            // Select the 'nameSorter' link

            const nameSorter = document.querySelector("name-sorter");

            // Add an event listener

           nameSorter.addEventListener ("click", (event) => {
               event.preventDefault();
               console.log("You clicked the name sorter");
           }) 

        // Notice, when you click the link the log in the console blinks for a moment and then disappears. why is that?

        // The default behavior of a link is to follow the link that was clicked. In this case, the browswer is simply reloading the page.

        // Prevent the above from happening using the preventDefault() method of the event object:

           nameSorter.addEventListener("click", (event) => {
               event.preventDefault();
         
           // This time, when you click the link, the page doesn't reload.
        // Here is the logic the you will implement in this event handler.

           // Get the <main> element that contains all the parks
                const main = document.querySelector("main");
           // Get a NodeList of all the parks
                const parksList = main.querySelectorAll(".park-display");
           // Empty the <main> element
                main.innerHTML = "";
                // if you run the above code, you will notice that the parks disappear from the page when the link is clicked. That is because you removed them from the DOM. However, they still exist and can be referenced from the parksList variable.
           // Convert the NodeList to an array for convenience of sorting.
                const parksArray = Array.from(parksList);
           // Sort the array using techniques that you learned previously
                // you can now use the sort() method of the array to sort this array. However, you need to write the function that defines how to sort the parks. Given two park elements, you need to find the name of each park and then compare the names. The park names are the innerText of the <h2> element.
            // 5. Sort the array
                parksArray.sort((parkA, parkB) => {
                    const parkAName = parkA.querySelector("h2").innerText;
                    const parkBName = parkB.querySelector("h2").innerText;
                    if (parkAName < parkBName) {
                    return -1;
                    } else if (parkAName > parkBName) {
                    return 1;
                    } else {
                    return 0;
                    }
                });
           // Iterate through the sorted array and append each park to <main>
                parksArray.forEach((park) => {
                    main.appendChild(park);
                });
            });

            Program overview
            Event listeners
          Lesson 5
          Event listeners
          1.5 hoursAverage Reading Time
          This lesson's assessment must be taken on a computer. If you don't have one, contact success@thinkful.com.
          Learning Objective
          By the end of this lesson, you will be able to create event listeners to detect events on the page. You'll also be able to write event handlers to respond to events on the page.
          
          Overview
          The real power of JavaScript comes from responding to actions that the user takes on a web page. These actions are called events, and you can listen for these events and handle them to create an interactive experience for the user. In this lesson, you'll learn how to do just that.
          
          Starter code
          For this lesson, you will refer to code found in the National Parks repository.
          
          If you haven't already, fork this repository. Then clone your fork of the repository to your computer with the following command:
          
          git clone https://github.com/<YOUR_GITHUB_USERNAME>/starter-national-parks.git
          Event
          When a web page is loaded in your browser, it basically sits there doing nothing, waiting for you to read it. As you start to read, you may attempt to scroll to view more of the page, or you may see links and buttons that invite you to click. As you move your mouse pointer around, the page starts to respond. You may see menus open, or animations start, or annoying ads pop up.
          
          These actions, which are called events, all occur in response to some action that you are taking. An event is an action or occurrence that happens in the browser. The system fires an event when certain actions occur.
          
          Key Term
          Event: An action or occurrence that happens in the browser
          
          There are many different types of events that occur in the browser. Here are some examples:
          
          Mouse movement, clicks, or dragging
          
          Typing on the keyboard
          
          Touching and swiping on a touch screen device
          
          Resizing the browser window
          
          Closing the browser window or tab
          
          Submitting a form
          
          The web page finishing loading
          
          To learn more about the many types of events that occur in the browser, check out MDN's Events page.
          
          You can respond to these events by writing a function that will run when the event fires. These functions are called event handlers.
          
          Key Term
          Event handler: A function that is executed in response to an event occurring
          
          Event listeners
          When you create an event handler, you need to associate it with an element in the DOM. For example, the user may click a button. You then register an event handler on the button to run when the button's click event fires. The mechanism that detects the event is called an event listener. An event listener contains an event name and an event handler. When the event fires, the event handler is executed.
          
          Key Term
          Event listener: A mechanism that detects an event and contains an event name and an event handler
          
          To create event listeners, use the addEventListener() method. This method takes two arguments: the name of the event and an event handler.
          
          Using the National Parks repository, you can add some event listeners to the page.
          
          Do this
          Add event listener to a button
          First, select a button on the page. Write the following code in the index.js file.
          
          const firstBtn = document.querySelector("button");
          Then call the addEventListener() method on this button. For now, you will write a very simple function for the event handler:
          
          firstBtn.addEventListener("click", (event) => {
            console.log("You clicked the button", event);
          });
          Reload the page in the browser, and try clicking the first button on the page. The event handler accepts a single parameter representing an event object. This event object encapsulates some details about the event that occurred. Observe the output in the console.
          
          Details about the event
          The event object that is passed to the event handler contains some information that you can use while handling the event. The event object is automatically passed to event handlers when they are invoked. They contain information relevant to the event itself.
          
          For example, you can get the specific element that fired the event with the target property of the event object, as shown here:
          
          firstBtn.addEventListener("click", (event) => {
            console.log(event.target);
          });
          This is especially useful when you attach the same handler to multiple elements. For example, you may want to highlight a park when the button associated with that park is clicked. You could attach the same event handler to each of these buttons. Take a look:
          
          // Select all the buttons for all the parks
          const allBtns = document.querySelectorAll(".rate-button");
          
          // Iterate through the list of buttons and add an event handler to each
          allBtns.forEach((btn) => {
            btn.addEventListener("click", (event) => {
              console.log(event.target);
            });
          });
          Notice that when you click any of the buttons, you get the same result. So how would you know which park belongs to the button that was clicked?
          
          The <section> element that represents a park is the parent of the button. Because event.target refers to the button that was clicked, then using the parentNode property of that button will get you the <section> element that was clicked. Here's what that looks like:
          
          allBtns.forEach((btn) => {
            btn.addEventListener("click", (event) => {
              console.log(event.target.parentNode);
            });
          });
          Notice that each time you click the button, the <section> element in which that button resides is logged to the console. You can then manipulate this element in any way that you wish. For example, the following code changes the background color:
          
          allBtns.forEach((btn) => {
            btn.addEventListener("click", (event) => {
              const park = event.target.parentNode;
              park.style.backgroundColor = "#c8e6c9";
            });
          });
          A complete example
          Suppose that you wanted to give the user the ability to sort the list of parks displayed on the page; you want them to be able to sort by either name or rating. You can add two links and allow the user to click whichever one they wish. You would then get the list of parks from the DOM, perform a sort on the list, and insert the parks back into the DOM in the new order.
          
          Start by adding the following HTML to index.html. Insert this between the <header> and the <main>.
          
          <div class="sorter">
            Sort by:
            <a href="" class="sort-link" id="name-sorter">Name</a> |
            <a href="" class="sort-link" id="rating-sorter">Rating</a>
          </div>
          Then, optionally, you could add some CSS to the style.css file.
          
          .sorter {
            width: 90%;
            margin: 0 auto;
            padding: 6px;
          }
          Next, add an event listener to the link. You will build this in steps so that it is clear what each step does. The following code all goes in the index.js file.
          
          // Select the `nameSorter` link
          const nameSorter = document.querySelector("#name-sorter");
          
          // Add an event listener
          nameSorter.addEventListener("click", (event) => {
            console.log("You clicked the name sorter");
          });
          Notice that you are selecting the link by the ID. However, when you click the link, the log in the console blinks for a moment and then disappears. Why is that?
          
          The default behavior of a link is to follow the link that was clicked. In this case, the browser is simply reloading the page. That clearly isn't what you want. You can stop this from happening using the preventDefault() method of the event object:
          
          nameSorter.addEventListener("click", (event) => {
            event.preventDefault();
            console.log("You clicked the name sorter");
          });
          This time, when you click the link, the page doesn't reload. Here is the logic that you will implement in this event handler:
          
          Get the <main> element that contains all the parks.
          
          Get a NodeList of all the parks.
          
          Empty the <main> element.
          
          Convert the NodeList to an array for convenience of sorting.
          
          Sort the array using techniques that you learned previously.
          
          Iterate through the sorted array and append each park to <main>.
          
          Remember, you'll build the event handler step by step. Start by reviewing the code for the first three steps:
          
          nameSorter.addEventListener("click", (event) => {
            event.preventDefault();
          
            // 1.  Get the main element
            const main = document.querySelector("main");
          
            // 2. Get the list of parks
            const parksList = main.querySelectorAll(".park-display");
          
            // 3. Empty the main element
            main.innerHTML = "";
          });
          If you run the above code, you will notice that the parks disappear from the page when the link is clicked. That is because you removed them from the DOM. However, they still exist and can be referenced from the parksList variable.
          
          To create an array from the NodeList, use the Array.from() method, as shown below. This takes an array-like structure and constructs an array.
          
          // 4. Create an array
          const parksArray = Array.from(parksList);
          You can now use the sort() method of the array to sort this array. However, you need to write the function that defines how to sort the parks. Given two park elements, you need to find the name of each park and then compare the names. The park names are the innerText of the <h2> element.
          
          // 5. Sort the array
          parksArray.sort((parkA, parkB) => {
            const parkAName = parkA.querySelector("h2").innerText;
            const parkBName = parkB.querySelector("h2").innerText;
            if (parkAName < parkBName) {
              return -1;
            } else if (parkAName > parkBName) {
              return 1;
            } else {
              return 0;
            }
          });
          The final step is to iterate over this sorted array and append each park element to the <main> element.
          
          So, the full code may look like this:
          
          // Select the `nameSorter` link
          const nameSorter = document.querySelector("#name-sorter");
          
          // Add an event listener
          nameSorter.addEventListener("click", (event) => {
            event.preventDefault();
          
            // 1. Get the main element
            const main = document.querySelector("main");
          
            // 2. Get the list of parks
            const parksList = main.querySelectorAll(".park-display");
          
            // 3. Empty the main element
            main.innerHTML = "";
          
            // 4. Create an array
            const parksArray = Array.from(parksList);
          
            // 5. Sort the array
            parksArray.sort((parkA, parkB) => {
              const parkAName = parkA.querySelector("h2").innerText;
              const parkBName = parkB.querySelector("h2").innerText;
              if (parkAName < parkBName) {
                return -1;
              } else if (parkAName > parkBName) {
                return 1;
              } else {
                return 0;
              }
            });
          
            // 6. Insert each park into the DOM
            parksArray.forEach((park) => {
              main.appendChild(park);
            });
          });
    
    // As you can see, the event handler code has gotten quite long. To help make the code more manageable, you can refactor this code by creating an external function for the event handler, and another for the sorting. The following code is equivalent to the above.

        // Function for sorting by name
            const sortByName = (parkA, parkB) => {
                const parkAName = parkA.querySelector("h2").innerText;
                const parkBName = parkB.querySelector("h2").innerText;
                if (parkAName < parkBName) {
                    return -1;
                } else if (parkAName > parkBName) {
                    return 1;
                } else {
                    return 0;
                }
            };
  
         // Function for handling the `nameSorter` click
            const nameSorterClickHandler = (event) => {
                event.preventDefault();
  
        // 1.  Get the main element
                const main = document.querySelector("main");
  
        // 2. Get the list of parks
                const parksList = main.querySelectorAll(".park-display");
  
        // 3. Empty the main
                main.innerHTML = "";
  
        // 4. Create an array
                const parksArray = Array.from(parksList);
  
        // 5. Sort the array
                parksArray.sort(sortByName);
  
        // 6. Insert each park into the DOM
                parksArray.forEach((park) => {
                    main.appendChild(park);
                });
            };
  
        // Select the `nameSorter` link
            const nameSorter = document.querySelector("#name-sorter");
  
        // Add an event listener
            nameSorter.addEventListener("click", nameSorterClickHandler);

        

// sort parks by rating
    // implement an event handler for the ratingSorter link. Use the above example as a template.


// the DOMContentLoaded event
    // if we trying to interact with the DOM on a very large website, it might not be fully loaded in time so we need to use a DOMContentLoaded event

    // a DOMContentLoaded event is a built-in event that fires once the HTML is fully parsed and loaded, whether or not the stylesheets and images are done loading.

    // to make sure that your HTML has been loaded into the DOM before your JavaScript code tries to interact with the DOM, you can run your JavaScript code when the DOMContentLoaded event fires. 
        // this event is attached to the window object, which you can think of as the browser itself.
        
    // Add a DOMContentLoaded event handler
        console.log("Before!");

        window.addEventListener("DOMContentLoaded", (event) => {
            console.log("Loaded!");
        });

        console.log("After!");

    // the code in the JavaScript file executes immediately as the file is parsed. However, the code inside the DOMContentLoaded event handler doesn't run until the HTML is fully parsed and loaded into the DOM.


// Refactor the DOM manipulation code
    // it is common practice to move code that manipulates the DOM into a single DOMContentLoaded event-handler function. You can name that function anything that you want. For example, you might name it init, ready, or main, as in the example below. Notice how main is declared, then passed to window.addEventListener() as the event handler:
    
    // Declare handler and support functions here

    // Function for sorting by name
    const sortByName = ...

    // Function for sorting by rating
    const sortByRating = ...

    // Function for handling the `nameSorter` click
    const nameSorterClickHandler = ...

    // Function to handle the `ratingSorter` click
    const ratingSorterClickHandler = ...

    // The code that runs once the DOM is loaded
    const main = () => {
        
    // Select the `nameSorter` link
    const nameSorter = document.querySelector("#name-sorter");

    // Add an event listener
    nameSorter.addEventListener("click", nameSorterClickHandler);

    // Select the `ratingSorter` link
    const ratingSorter = document.querySelector("#rating-sorter");

    // Add an event listener
    ratingSorter.addEventListener("click", ratingSorterClickHandler);
    }

    // Add event listener for `DOMContentLoaded`
    window.addEventListener("DOMContentLoaded", main);