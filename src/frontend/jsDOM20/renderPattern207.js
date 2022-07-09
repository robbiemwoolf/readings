// JavaScript and the DOM
// Render pattern

// overview: The coe that you have written so far may work, but it isn't very scalable. As your application grows, you will find it increasingly difficult to manipulate the DOM to find the data that you need to process. So in this lesson, you'll learn a technique to deal with this.

// reference starter-national-parks, Render_Starter branch

// terms:

    // event delegation: the process of handling events at a higher point in the DOM than where the event originated


// Data and the DOM

    // In the code that you have written so far, the data associated with the parks has all been contained in the HTML file. As a result, the structure of the HTML has become tightly coupled to the processing of the data.

    // For example, look at the way that the parks are sorted by rating. Here is the sortByRating() function used to perform the sort.

        const sortByRating = (parkA, parkB) => {
            const parkARating = parseFloat(
                parkA.querySelector(".rating-display > .value").innerText
            );
            const parkBRating = parseFloat(
                parkB.querySelector(".rating-display > .value").innerText
            );
            return parkBRating - parkARating;
        };

        // in particular, pay attention to the way that you got the rating value from the DOM

            // you selected an element with the class rating and looked for a direct descendant with the class value

                // this can be problematic for a number of reasons

                    // if the html structure is updated for any reason - such as to improve the layout or to add further data to the park - the JavaScript sorting code will break

                    // and if the style is updated and the class anmes are changed, that will also break the JavaScript code

                // so right now our html structure is tightly coupled to the JavaScript code. This coupling can make it very difficult to maintain code in the long run

                // so how can we make the html and javascript files less dependent on each other?

                    // one way is to identify the data that you are concerned with and store that data separately

                        // you can then generate the DOM based on the data


    // the data

        // in the starter code, there is a file named data.js. This file contains a single array declaration, and the array contains several objects representing parks

        const parks = [
            {
              name: "Biscayne National Park",
              location: "Florida, United States",
              description:
                "Biscayne National Park encompasses coral reefs, islands and shoreline mangrove forest in the northern Florida Keys. Its reefs and islands are accessible only by boat. Dolphins, turtles and pelicans live in Biscayne Bay Lagoon. The underwater Maritime Heritage Trail links dive sites, most of them shipwrecks. On Boca Chita Key, Boca Chita Lighthouse has coastal views. A museum at Convoy Point explains local ecosystems.",
              established: "June 28, 1980",
              area: "172,971 acres (699.99 km^2)",
              rating: 4.7,
            },
            // ...
          ]; 

        // you can now write a function whose job it is to construct a DOM element for each park and insert it into the DOM at an appropriate place

            // if you update this data at any time, say in response to the user adding a new park, you can simply run the function agian to update the DOM

        // Similarly, if you want to sort the data, you can perform the sort on this array of data, and then execute the same function again to update the DOM with the sorted data.

        // When you generate the DOM in response to data in this way, you are rendering the user interface. For that reason, it makes sense to name this function render().

    // The render() function

        // to render the parks on the page, you will have to do the following:

            // Remove any existing content from the parent element
            // Create the HTML for each park in the array
            // Set the innerHTML of the parent element

        // Create a renderOnePark() function

            // Create a function named renderOnePark() that accepts a park and returns the HTML code for that park.

            const renderOnePark = (park) => {
                // Get the individual properties of the park
                const { name, location, description, established, area, rating } = park;
              
                const content = `
                    <section class="park-display">
                      <h2>${name}</h2>
                      <div class="location-display">${location}</div>
                      <div class="description-display">${description}</div>
                      <button class="rate-button" title="Add to Favourites">&#9734;</button>
                      <div class="stats">
                        <div class="established-display stat">
                          <h3>Established</h3>
                          <div class="value">${established}</div>
                        </div>
                        <div class="area-display stat">
                          <h3>Area</h3>
                          <div class="value">${area}</div>
                        </div>
                        <div class="rating-display stat">
                          <h3>Rating</h3>
                          <div class="value">${rating}</div>
                        </div>
                      </div>
                    </section>
                `;
                return content;
              };


        // Create a render() function

            // The render() function will make use of the renderOnePark() function

            const render = () => {
                // Get the parent element
                const main = document.querySelector("main");
              
                // Empty the parent element
                main.innerHTML = "";
              
                // Get the parks HTML
                const content = parks.map(renderOnePark).join("");
              
                // Set the `innerHTML` of parent element
                main.innerHTML = content;
            };

        // Call render() in the main() function

            // To call the render() function, add the following statement to the main() function

            const main = () => {
                // All the existing code
              
                render();
            };


// Refactor the sort

    // the two sort functions are still getting the data from the DOM. You can refactor these to directly sort the parks array itself and simply call render() when it is time to update the DOM

    // the sortByName() function may be refactored to accept two park objects rather than two DOM elements

    const sortByName = (parkA, parkB) => {
        const parkAName = parkA.name;
        const parkBName = parkB.name;
        if (parkAName < parkBName) {
          return -1;
        } else if (parkAName > parkBName) {
          return 1;
        } else {
          return 0;
        }
    };

    // Notice that you aren't querying the DOM anymore. You have direct accesss to the data.

    // Correspondingly, the nameSorterClickHandler() function is now simpler.You can remove all the DOM access and manipulation. You just need to do two things:

        // sort the array
        // render the page

        // implement as follows:

        const nameSorterClickHandler = (event) => {
            event.preventDefault();
          
            parks.sort(sortByName);
          
            render();
        };
          
