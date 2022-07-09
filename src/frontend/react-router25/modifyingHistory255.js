// React Router 25

// Modifying the History 25.5

    // overview: learn to use the useHistory() hook to provide programmatic navigation to let an application create, update, or delete data before navigating to another page

// terms:

    // programmatic navigation: navigation that causes a user to be redirected as a result of an event - such as logging in or saving - that occurs on a route

// In some situations, the application needs to create, update, or delete some date before navigating to a new page, usually the result of a user clicking a link.

    // For example, the onClick() handler for the Save button must first save the data to the backend. Then, after the save is successful, it must return to the application dashboard. This requries programmatic navigation - some way to write code that causes the browswer to go to the new page after the save is complete.

// What's the problem?

    // Imagine that you have been working on a React application to keep track of users. It's been going well. Visitors can see a list of users and can view user details. Visitors love it!

    // Now, the visitors are asking for a Delete button on the user detail page. When clicked, this button should delete the user. Then, when the delete is complete, it should display the list of users again.

    // You add the Delete button. But now what?

    // Visitors won't be happy if the browser stays on the user detail page after the delete completes. You know that a link won't work, because the visitors want to stay on the user detail page until the delete is complete.

    // Luckily, you can use the useHistory() hook to navigate programmatically.

// The History API and the history Object

    // The browser's history API lets you write code to interact with the browser history, trigger the browser navigation methods, and change the address bar content.

    // The history object is a wrapper around the browser's history API. It gives you the ability to write code that controls the navigation of the browser.

// The useHistory() hook

    // The useHistory() hook gives you access to the history object.

    // This hook is provided by the React Router DOM package, which you can install and use as follows:

    import React from 'react';
    import { useHistory } from 'react-router-dom';

    function MyComponent() {
        const history = useHistory();
        ...
    }

    // Using the useHistory() hook and the history object, you can return to the /user page after the user is deleted.

    // You'll start with the simplest thing that you can do with the history API: going back to the previous page.

// The goBack() Method

    // A common requirement is to go back to the previous page. This should have the same effect as the user clicking the Back button on the browser. The goBack() method of the history object performs this task. Using history.goBack() navigates to the previous entry in the browser history.

    import React from "react";
    import { useHistory } from "react-router-dom";

    function BackButton() {
        const history = useHistory();
        return (
            <button type="button" onClick={() => history.goBack()}>
                Go Back
            </button>
        );
    }

// The goForward() Method

    // Another useful way to navigate is to go forward to the next page. You can go forward to the next page using history.goForward(), as long as there is a next page in the history.

    import React from "react";
    import { useHistory } from "react-router-dom";

    function ForwardButton() {
        const history = useHistory();
        return (
            <button type="button" onClick={() => history.goForward()}>
            Go Forward
            </button>
        );
    }

// The go() Method

    // The go() method allows navigation, forward or backward, multiple pages at a time. You can use positive numbers to go forward and negative numbers to go backward.

    history.go(0); // Equivalent to refreshing the page
    history.go(-1); // Equivalent to `history.goBack()`
    history.go(-2); // Equivalent to calling `history.goBack()` twice
    history.go(1); // Equivalent to `history.goForward()`
    history.go(3); // Equivalent to calling `history.goForward()` three times

    // If you call go() with a number, and the history isn't able to move that number of pages, nothing will happen.

    // Now you know how to navigate the history that already exists. So now, you're ready to create new history—in other words, to navigate forward to a new URL—using push().

// The push() Method

    // The push() method pushes a new entry onto the history stack and changes the current URL to the value that you specify. Take a look:

    history.push("/users"); // Navigate to /users
    history.push("/home?q=query"); // Navigate to /home?q=query

    // When you use push(), you're always navigating forward from the current page.

    // Given this API, you can create a <GoHomeButton> that will go to the home page when clicked. Here's an example:
    
    import React from "react";
    import { useHistory } from "react-router-dom";

    function GoHomeButton() {
    const history = useHistory();
    return (
        <button type="button" onClick={() => history.push("/")}>
            Go Home
        </button>
    );
    }

    // Because this button only goes to the home page, it would also work to use a <Link> component. But if this button did something more, like update or delete a resource, and then went to the home page, it couldn't be replaced by a <Link>.