// JavaScript and the DOM
// Form Submissions

// overview: you will look at a few concepts related to handling form submissions

// REFERENCING STARTER-NATIONAL-PARKS

// Websites often capture data entered by users. The user enters data on the form and then submits it. At this point, some validation is typically performed. So, you need to write some code to handle the event of the form being submitted.

//the submit event fires when the user submits a form
    // this event fires on the <form> element itself, not on any button on the form
    // as we did with other events, you can simply provide a handler function for the submit event

// Handling the submit event

    // To handle the form submission, you need an event handler function

    // You then create the event listener on the form, when the DOM is fully loaded


// create a submit handler, this function will be used for handling the form submission

const oldSubmitHandler = (event) => {
    console.log("The form was submitted");
};

// then add a main() function that creates the event listener for the form submission

const main = () => {
    // get the form element
    const form = document.querySelector("#park-form");

    // attach the submit handler
    form.addEventListener("submit", submitHandler);
};

// add an event listener for DOMContentLoaded that invokes the main() function

window.addEventListener("DOMContentLoaded", main);

    // you will notice that when you try to submit the form, the page is reloaded immediately. That is the default behavior of forms in a browser. How do you stop this behavior?

    // add a preventDefault() method to the event

const Old2SubmitHandler = (event) => {
    event.preventDefault();
    console.log("The form was submitted");
}

    // now upon submitting the form, the page no longer refreshes

// The FormData object
    // now we need to get the data entered into the form
    
    // here is one way
        // directly select one of the <input> elements and use the value property to get data. By adding this to the submitHandler() function

        //Get the name input
        const parkName = document.querySelector("#name-input").value;

        // now when you enter a name and submit the form, you'll see that value

    // There is a built-in object that can automatically read the data from the form and present it in an easy to use interface.
        // the FormData object can be populated with a form's data as a set of key-value pairs. 

        // To use the FormData object, simply instantiate one with the <form> element, as shown bleow.

        const Old3SubmitHandler = (event) => {
            event.preventDefault();

            const formData = new FormData(event.target);
        };

    // the FormData object has several methods for working with the form. You can use the get() method to get a specific value
        // the keys in the FormData correspond to the names of the form's <input> elements

        // To get the park name value

        const name = formData.get("name");
        console.log(name);


// Required Validation

    // before using the data entered by the user, you can do some validation on it

    // you can validate that the user entered some text for each form input
        
        // and if they did not, you can display the corresponding error message

    // Add validate function for required fields
        
        // this function accepts a single string value and returns true if the value isn't null and the string contains at least one non-space character

        function validateExists(value) {
            return value && value.trim();
        };

    // The main validation function

        // placing all the code to perform the validation in its own function would be useful and make the code more readable

        // this function will take each input field, perform required validation on it, and generate a collection of error messages which may then be displayed for the user

        function validateForm(formData) {
            const errors = {};

            // Check if name was entered
            if (!validateExists(formData.get("name"))) {
                errors.name = "Please enter a name";
            }

            // Check if rating was entered
            if (!validateExists(formData.get("rating"))) {
                errors.rating = "Please enter a rating";
            }

            // Check if description was entered
            if (!validateExists(formData.get("description"))) {
                errors.description = "Please enter short description";
            }

            // Check if established date was entered
            if (!validateExists(formData.get("established"))) {
                errors.established = "Please enter date";
            }

            // Check if area was entered
            if (!validateExists(formData.get("area"))) {
                errors.area = "Please enter the area of the park";
            }

            // Check if location date was entered
            if (!validateExists(formData.get("location"))) {
                errors.location = "Please enter the location of the park";
            }

            return errors;
        }
    
        // the function above accepta a FormData object containing the data from the form and checks each one to ensure that some value was entered

            // now this function must be called from the submitHandler() function

    // add the validateForm() function to the JavaScript file then modify the submitHandler() function as follows

    const submitHandler = (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        const errors = validateForm(formData);

        // clear all previous errors
        const errorElements = document.querySelectorAll(".error");
        for (let element of errorElements) {
            element.style.display = "none";
        };

        // Display any new errors
        Object.keys(errors).forEach((key) => {
            // Find the specific error eleemnt
            const errorElement = document.querySelector(`#${key}-form .error`);
            errorElement.innerHTML = errors[key];
            errorElement.style.display = "block";
        });
    };

    // this is a basic form validation; this could have been accomplished in a number of other ways

        // for example, the ratings field is supposed to be a number in the range 1-5, inclusive.

        // we can create validation functions to validate that a given value is actually a number and another that validates the number in a specific range

        function validateNumber(value) {
            return !isNaN(value);
        };

        function validateRange(value, min, max) {
            return value >= min && value <= max;
        };

        // Then the validateForm() function may be modified to add these validations to the ratings

        //... 

        // Check if rating was entered
        if (!validateExists(formData.get("rating"))) {
            errors.rating = "Please enter a rating";
        } else {
            // Check if the rating is a number
            if (!validateNumber(formData.get("rating"))) {
                errors.rating = "Rating must be a number";
            } else {
                // Because it is a number, convert it
                const rating = Number.parseFloat(formData.get("rating"));
                // Check that the rating is between 1 and 5, inclusive
                if (!validateRange(rating, 1, 5)) {
                    errors.rating = "Rating must be between 1 and 5 inclusive";
                };
            };
        };

        //...


// Add a park

    // Finally, if all the validation passes, you could update the DOM with the new park information.
        
        // this would involve creating a new element for the form, making sure that it is formatted the same way as all the other parks on the page, and appending it to the parent element of all the parks

        <section class="park-display">
            <h2>The park name here</h2>
            <div class="location-display">the park location here</div>
            <div class="description-display">The park description here</div>
            <button class="rate-button" title="Add to Favourites">&#9734;</button>
            <div class='stats'>
                <div class='established-display stat'>
                    <h3>Established</h3>
                    <div class='value'>The date of establishment here</div>
                </div>
                <div class='area-display stat'>
                    <h3>Area</h3>
                    <div class='value'>The area of the park here</div>
                </div>
                <div class='rating-display stat'>
                    <h3>Rating</h3>
                    <div class='value'>The rating of the park here</div>
                </div>
            </div>
        </section>

        // most of this is just template data - that is, it's mostly parts that don't change, interspersed with some date to be filled in.

        // you can create a new <section> element and set the rest of the HTML as the innerHTML property of the new element. You can use template literals to construct the correct HTML

    
// add a park to the DOM

    // add the following code to the end of the submitHandler() function

    // If there are no errors

    if (!Object.keys(errors).length) {
        // Create a new element
        const parkSection = document.createElement("section");
    
        // Add the park class
        parkSection.classList.add("park-display");
    
        // Construct the HTML for this element
        const content = `
        <h2>${formData.get("name")}</h2>
        <div class="location-display">${formData.get("location")}</div>
        <div class="description-display">${formData.get("description")}</div>
        <button class="rate-button" title="Add to Favourites">&#9734;</button>
        <div class="stats">
            <div class="established-display stat">
            <h3>Established</h3>
            <div class="value">${moment(formData.get("established")).format(
                "MMMM D, YYYY"
            )}</div>
            </div>
            <div class="area-display stat">
            <h3>Area</h3>
            <div class="value">${formData.get("area")}</div>
            </div>
            <div class="rating-display stat">
            <h3>Rating</h3>
            <div class="value">${formData.get("rating")}</div>
            </div>
        </div>
        `;
    
        // Set the innerHTML
        parkSection.innerHTML = content;
    
        // Append to the main element
        document.querySelector("main").appendChild(parkSection);
    };

// the Moment library, https://momentjs.com/, can help you format dates before displaying them in the DOM

// in the content HTML above, calling moment(forData.get("established")).format("MMMM D, YYYY") will format any valid date entered into the established field using the MMMM D, YYYY format (which looks like January 1, 1999)

// For example, if you enter a valid date such as 12-06-1987 or 12/06/1987 into the established field and submit the form, the date will show up as December 6, 1987 in the DOM.

// check out the Moment.js docs for other arguments that you can pass to the moment().format() method to control how dates are displayed in the DOM.
    // https://momentjs.com/docs/#/displaying/

    // verify a date's validity
        // https://momentjs.com/docs/#/parsing/is-valid/

