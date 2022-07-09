// JavaScript and the DOM
// Selecting elements on the DOM
    
// overview: To manipulate HTML with JavaScript, you need to start by accessing the elements that you wish to change. This involves finding the element or set of elements in the DOM. In this lesson, you will examine a few of JavaScript's built-in methods for searching the DOM for elements.


// terms:
//    Node: an element in a tree structure
//    NodeList: a list of elements that match a given selector


// File references in thinkful/dothis/starter-national-parks folder.

// Sketch the DOM
//     Use an online drawing tool like Figma to sketch the DOM structure diagram


// Accessing the DOM
//     The browser makes all of the page's HTML accessible via a global variable named document.
//         This variable is available to your JavaScript and contains a reference to the entire HTML document.

//         You can check this is true by adding console.log(document) to your index.js file and looking at the console through the Chrome DevTools.

  
// Finding an element with querySelector()
//     Now that we have access to the entire HTML document, we can use the built-in querySelector() method to search the DOM.

//     The querySelector() method accepts a string representing a CSS selector. Then it returns the first element in the DOM that matches that selector.

//     For example, to find an <h1> element on the page, you can use the following syntax:
//         const heading = document.querySelector("h1");
//         console.log(heading);


// Selectors
//     In the querySelector() example above, the string "h1" was used as a selector.

//     A selector is any valid CSS Selector. 

//     Here are just a few types of CSS selectors:
//         Type selector (targets any HTML element name)
//             h1, p, section
        
//         Class selector (targets elements based on the value of the class attribute)
//             .location, .stats
//         Id selector (targets elements based on the value of the id attribute)
//             #rating, #area

//     Full documentation
//         https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors

//     How would you find a <div> that is a descendant of an element with the class stat?
//         Read more about descendant selector.

//     How would you find an element with the class hello?


// Collections of elements with querySelectorAll()
//     If we want to get all the matched elements instead of just the first we use querySelectorAll().

//     Example:
            // Find all the buttons on the page
                const buttons = document.querySelectorAll("button");
                console.log(buttons);

//         then check the DevTools to see what was logged
              // <img src="images/allButtonsLog.png" alt="">

//             Click the expander arrows to drill down into the elements


// Working with NodeList
//     When we logged all the buttons it stated it was a NodeList.

//     Node is a term used to describe an element in a tree structure.

//     A NodeList, then, is a list of elements that match the selector.
//         Typically, you'll want to iterate over the list of elements found and process them in some way.
//             The NodeList isn't an array, but there are many properties and methods that allow it to be processed like an array.

//         You can iterate over the NodeList() using the values() method, as shown here:
//             Get a list of all `<h3>` elements
                  const heading3List = document.querySelectorAll("h3");
            
            // Iterate over the list and print each one
                for (let element of heading3List.values()) {
                    console.log(element);
                }

        //  Or, you can use a simple for loop
            for (let i = 0; i < heading3List.length; i++) {
                const element = heading3List[i];
                console.log(element);
            }


// Supporting older browsers
    // Very old browsers (and Internet Explorer in particular) don't fully support the NodeList interface. As such, the code above may not work as intended. If you need to support Internet Explorer, you can use the Array.prototype.forEach() method, like this:

        // Get a list of descriptions
            const list = document.querySelectorAll(".description-display");

        // Log them to the console
            Array.prototype.forEach.call(list, function (element) {
                console.log(element);
            });

            // Array class is used to contruct new arrays
            
            // prototype constructor is commonly used to add new properties and methods to the Array object.

            