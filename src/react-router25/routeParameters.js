// React Router 25

// Route Parameters 25.4

    // overview: Nearly every web application needs to extract some information from the browser's URL. The parts of the URL that are variable and need to be extracted are called URL parameters. By the end of this lesson, you will be able to use the useParams() hook to implement routes with parameters.

// terms:

    // URL parameter: Also called a param, the part of a URL that is variable and that web applications need to extract

// What's the problem?

    // Sometimes, you'll want to build a component that displays different data for different URLs. 

        // For example, you may build a component to display a user's profile. Given the URL http://localhost:3000/user/42, how do you extract the number 42 (representing a user's ID) to fetch the correct user profile?

            // you can use a URL parameter

// URL Parameters

    // A URL parameter is a placeholder in the URL that begins with a colon.

    // To indicate that part of a route is a parameter, you define the path with a parameter token; in other words, precede it with a colon and give it a meaningful name.

    // http://localhost:3000/user/42
    <Route path="/user/:id">
        <UserProfile />
    </Route>

    // If there are multiple parameters in the URL, each must have a unique name.

    // http://localhost:3000/user/42/post/17
    // path="/user/:userId/post/:postId"

    // This allows a route to render the same component while passing the dynamic portion of the URL to that component. That way, the component can change what it renders based on the parameter.

    // To get access to the rout params, you can use the useParams() hook.

// The useParams() Hook

    // The useParams() hook returns an object of key-value pairs of route parameters. You can use it to access the params of the current <Route>.

    // Consider the following example:

    // <Route path="/user/:userId/post/:postId">
    //     <UserProfile />
    // </Route>

    // Given the above route, the <UserProfile> component can access the parameters using the useParams() hook, like this:

    import React from "react";
    import { useParams } from "react-router-dom";

    function UserProfile() {
        const params = useParams();
        return <p>{JSON.stringify(params)}</p>;
    }

    // route parameters can be anything; they can be whatever your application needs

    // URL /user/42/post/17
        // Renders {"userId":"42","postId":"17"}

    // URL /user/fred/post/params-can-be-anything
        // Renders {"userId":"fred","postId":"params-can-be-anything"}

    // URL /user/params-can-be-anything/post/%7Beven-things-that-look-like-JSON:%22value:%7D
        // Renders {"userId":"params-can-be-anything","postId":"{even-things-that-look-like-JSON:\"value:}"}