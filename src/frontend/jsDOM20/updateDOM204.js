// JavaScript and the DOM
// Updating the DOM

// overview: learn to modify elements, create new elements, and remove elements from the DOM.

// Reference 
    //thinkful/dothis/starter-national-parks/ folder.


// Modifying an element
    // once an element has been selected using querySelector() or querySelectorAll(), you have access to many of its properties and can change some of them. There are three common changes that may be made to an element: changing the text contained in an element, changing the value of an attribute, and changing the CSS style of an element.

        // Changing the content
            // In the National Parks example webpage, we can see that the descriptions of the various parks are all of different lengths.

            // Suppose that we wanted to limit the length of these descriptions to 250 characters and add an ellipsis ... to those that were truncated.

            // first we select all the descriptions on the page. We can use a class selector, because all the descriptions are in <div> elements with the class description.
                const descriptions = document.querySelectorAll(".description-display");

            // Next, we will iterate through the list of descriptions and get the text for each one.
            
            // Each item returned by querySelectorAll() is of type HTMLElement.

            // HTMLElement is a built-in interface that exposes properties and mehtods common to all elements taht are found in an HTML document.
                // Full documentation
                    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement

        // The innerText property
            // One of the properties exposed by the HTMLElement interface is the innerText property. 
            
            // The innerText property contains any text that is contained between the opening and closing tags of the element.

            // For example, we can iterate over the descriptions to truncate these strings to 250 characters and add ellipses if they are longer than that and then log them
            for (let desc of descriptions.values()) {
                let content = desc.innerText;
  
                if (content.length > 250) {
                    content = content.slice(0, 250);
                    content = content + "...";
                }
  
                console.log(content);
            }

        // Update the HTMLElement
            // we can replace console.log(content) to update the HTMLElement, using the innerText property and the truncated text, like so:

            for (let desc of descriptions.values()) {
                let content = desc.innerText;
              
                if (content.length > 250) {
                  content = content.slice(0, 250);
                  content = content + "...";
                }
              
                desc.innerText = content;
            }


        // The innerHTML property
            // but what if we wanted the ellipses that you added above to be clickable? 
                // you can wrap an ellipsis in <a> tags to make it into a link, like so:

                for (let desc of descriptions.values ()) {
                    let content = desc.innerText;
                  
                    if (content.length > 250) {
                      content = content.slice(0, 250);
                      content = content + '<a href="#">...</a>';
                    }
                  
                    desc.innerHTML = content;
                } 

                // But these will result in a literal interpretation. If we want the browswer to interpret the string that we provide as HTML, use the inner HTML property.
                    // update the last line innerText to innerHTML.


        // Changing the style
            // To change the CSS style of an element, you can use the element's style property.
            // This style property is an object representing all of the CSS styles associated with an element

            // Suppose that you wanted to bold any rating value that is greater than 4.7. You would have to select all rating values, check if they match the condition, and add a style to those that do. You can start by selecting all rating values, as follows:

            const ratings = document.querySelectorAll(".rating-display .value");

            //Next, iterate through the list and get each actual rating value using the innerText property. This returns a string value, but you want to work with the rating as a number. So, use the parseFloat() method to convert a string into a floating point number, as shown below:

            for (let rating of ratings) {
                let ratingValue = parseFloat(rating.innerText);
                console.log(ratingValue);
            }

            // Next, check the condition. If ratingValue > 4.7, then set the fontWeight style to bold, like this:

            for (let rating of ratings) {
                let ratingValue = parseFloat(rating.innerText);
              
                if (ratingValue > 4.7) {
                  rating.style.fontWeight = "bold";
                }
            }

            // The name of the JavaScript property relates to the name of the CSS property.
                // CSS
                    // font-weight or background-color
                // JS
                    // fontWeight or backgroundColor

            // another example, where the rating text is set to a lighter green if the rating is greater than 4.7
            for (let rating of ratings) {
                let ratingValue = parseFloat(rating.innerText);
              
                if (ratingValue > 4.7) {
                  rating.style.fontWeight = "bold";
                  rating.style.color = "#3ba17c";
                }
            }

        // A complete list of the CSS style properties and the corresponding JavaScript names for those styles
            // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference

        // The classList property
            // Alternatively, if you want to make many changes to the style of an element, you could create a CSS class for that style. You could then add or remove that class from the element using the classList property.

            // The classList property is a list of the classes that are applied to an element. It provides methods to add() and remove() classes.

            // Dynamically add classes
                // Add the following CSS rule to the style.css file
                    /* .high-rating {
                            color: #3ba17c;
                            font-size: 1.5rem;
                            font-weight: bold;
                            text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
                            text-align: center;
                        }
                    */

                // When the rating is greater than 4.7, you want to replace the value class with the high-rating class. Modify the JavaScript code to do this, as follows:

                for (let rating of ratings) {
                    let ratingValue = parseFloat(rating.innerText);
                  
                    if (ratingValue > 4.7) {
                      rating.classList.add("high-rating");
                      rating.classList.remove("value");
                    }
                }

        // Creating DOM elements
            // The createElement() method creates a new element with the given tag name.

            // After creating an element, you will want to add the element to the page using the appendChild() method. 
                // This method adds a given element to the end of the list of children of a parent element.

            // Create a new element with text
                // Suppose that you wanted to dynamically add a statement to the page's heading, stating the number of parks on display.
                
                // start by selecting all the parks on the page and getting the number of parks from that list. 
                
                // Then you would construct an element with this information and insert it on the DOM at the right place.

                // select the parks on the page using the park class as a selector
                    const parks = document.querySelectorAll(".park-display");

                // get the number of parks using the length property of the list
                    const numberParks = parks.length;

                // create a new element. In this case, use a <div>
                    const newElement = document.createElement("div");

                // this created an empty element, we can set the text of this element with the innerText property
                    newElement.innerText = `${numberParks} exciting parks to visit`;

                // add style and classes
                    // create a new CSS rule for the class header-statement
                        /* .header-statement {
                                color: #ffffff;
                                font-size: 1.2rem;
                            }
                        */
                    
                    // then ad this class to the new element, as follows:
                        newElement.classList.add("header-statement")

                // add the element to the page
                    // select the <header> element and use the appendChild() method to add the new element to the <header>
                            const header = document.querySelector("header");
                            header.appendChild(newElement);


        // removing DOM elements
            // You can remove elements from the DOM via the removeChild() method, which removes the provided node from the DOM.

            // For example, you can select the first park on the page and remove it, as demonstrated here:

                // Get the parent element of all parks
                    const main = document.querySelector("main");

                    // Select a single park
                    const park = main.querySelector(".park-display");

                    // Remove that park
                    main.removeChild(park);






