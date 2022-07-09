// React And APIs With Hooks 24

// Effect Hook With Cleanup 24.3

// overview: continue building on your skills with useEffect(). You'll learn how to return a cleanup function from the effect hook, which will enable you to undo previously applied effects.=By the end of this lesson, you will be able to return a cleanup function from the useEffect() hook to cancel pending API calls.

// Imagine that you want to write a component that allows an admin user to update the user profile of any user on the system. To do so, you will need to pass the user's ID to the component, so that the component can do the following:

    // Make an API call to get that user's profile

    // Allow the admin user to edit the profile

    // Upon form submission, make another API call to save the updated profile

// Avoiding Race Conditions

    // The fetch() call is asynchronous, so anything can happen between when the API call starts and ends.
    
        // This can introduce race conditions; for example, you could get new props. If the code in the effect is calling an API and depends on props, you have a race condition.

    // To understand how this happens, look at the App.js and ProfileEdit.js files below:

// App.js
import React, { useState } from "react";
import "../src/App.css";
import ProfileEdit from "./ProfileEdit";

function App() {
  const [userId, setUserID] = useState(1);

  const userIds = [1, 2, 3, 4];

  return (
    <div className="App">
      {userIds.map((id) => (
        <button key={id} onClick={() => setUserID(id)}>
          User ID {id}
        </button>
      ))}
      <h2>User ID {userId}</h2>
      <ProfileEdit userID={userId} />
    </div>
  );
}

export default App;

// ProfileEdit.js
import React, { useEffect, useState } from "react";

function ProfileEdit({ userID }) {  // Added `userID` as a prop
  const [user, setUser] = useState({});

  useEffect(() => {
    async function loadUser() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
      const userFromAPI = await response.json();
      setUser(userFromAPI);
    }

    loadUser();
  }, [userID]);  // <-- Added dependency on `userID`

  ... // Omitted for brevity
}


export default ProfileEdit;

// Note that the userID is passed in as a prop to ProfileEdit, and ProfileEdit.useEffect() has a dependency on userID because it is used in the API URL.

// To make the effect more noticeable, you can simulate a slower network connection in your browser. Chrome Developer Tools makes it easy to throttle your internet bandwidth. To do so, first open up DevTools, then navigate to the Network tab, and select the Slow 3G option from the menu

// How can you fix this so that the selected user and the user displayed for edit are always in sync?

// You might consider calling setUser({ }) at the beginning of useEffect(). When you do that, "Loading..." will be displayed until the new user is returned from the API. Then, add setUser({ }); at the beginning of useEffect(). Your code will look like this:

useEffect(() => {
    setUser({});
    async function loadUser() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userID}`
      );
      const userFromAPI = await response.json();
      setUser(userFromAPI);
    }
  
    loadUser();
  }, [userID]); // <-- Added dependency on userID

  // This is better, but it doesn't completely solve the problem. Take a look at the animation below—there are still times when the user ID and the API user ID are out of sync.

    // This is because an earlier call to fetch() completed after a new user ID passed to the component. 
    
        // Wouldn't it be nice if you could signal to fetch() that it should cancel the current API call when the user ID changes?

        // You can do that by returning a cleanup function from useEffect(). 
        
            // The cleanup function can do anything necessary to clean up after previously applied effects.

            // Essentially, its purpose is to undo an effect for cases like subscriptions or pending API responses.

// Let's walk through what happens when the user ID prop changes from 1 to 2.

  // React only runs the effects after letting the browser paint.
    
    // This makes your app faster, because most effects don't need to block screen updates.

  // Effect cleanup is also delayed.

  // The previous effect is cleaned up after the re-render with new props.

  // The following is the sequence of events in React when the user ID prop changes from 1 to 2:

    // React renders a new UI for { userID: 2 }
    // The browser paints, and you see the UI for { userId: 2 } on the screen.
    // React cleans up the effect for { userId: 1 }
    // React runs the effect for { userId: 2 }

  // How can the cleanup of the previous effect still "see" the old { userId: 1 } props if it runs after the props change to { userId: 2 }?

    // Well, you can use a JavaScript closure to capture the props and state of the render call that defined it. Specifically, define the cleanup function as an arrow function and use the necessary props or state in the cleanup function.

// Now, look at what useEffect() looks like when it returns a cleanup function that cancels the pending API call:

useEffect(() => {
  setUser({});
  const abortController = new AbortController(); // Create a new `AbortController`

  async function loadUser() {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userID}`,
        { signal: abortController.signal } // Pass the `AbortController` signal to `fetch()`
      );
      const userFromAPI = await response.json();
      setUser(userFromAPI);
    } catch (error) {
      if (error.name === "AbortError") {
        // Ignore `AbortError`
        console.log("Aborted", userID);
      } else {
        throw error;
      }
    }
  }

  loadUser();

  return () => {
    console.log("cleanup", userID);
    abortController.abort(); // Cancels any pending request or response
  };
}, [userID]);

// First, you need a new instance of AbortController, which is a special built-in object. The AbortController object can be used to abort not only fetch(), but other asynchronous tasks as well.

// Using AbortController with fetch() and useEffect() requires four steps:

    // Create a new instance of AbortController

    const abortController = new AbortController();

    // Pass the signal property to fetch():

    fetch(url, { signal: abortController.signal });

    // catch() the AbortError that is thrown when fetch() is aborted:

    try {
        ....
        } catch (error) {
          if (error.name === "AbortError") {
            // Ignore `AbortError`
            console.log("Aborted", userID);
          } else {
            throw error;
          }
        }
    })

    // return a cleanup function from useEffect()

    return () => abortController.abort();

    // Once these changes are made, the ProfileEdit component displays only the current user. Note that additional logging was added here to show the order of effect and cleanup.

// Create The Profile Editor Application

    // Add the following starter code to a React application and render it

    // App.js

    import React, { useState } from "react";
import "../src/App.css";
import ProfileEdit from "./ProfileEdit";

function App() {
  const [userId, setUserID] = useState(1);

  const userIds = [1, 2, 3, 4];

  return (
    <div className="App">
      {userIds.map((id) => (
        <button key={id} onClick={() => setUserID(id)}>
          User ID {id}
        </button>
      ))}
      <h2>User ID {userId}</h2>
      <ProfileEdit userID={userId} />
    </div>
  );
}

export default App;

// ProfileEdit.js

import React, { useEffect, useState } from "react";

function ProfileEdit({ userID }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function loadUser() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userID}`
      );
      const userFromAPI = await response.json();
      setUser(userFromAPI);
    }

    loadUser();
  }, [userID]); // <-- Added dependency on `userID`

  useEffect(() => {
    if (user.username) {
      document.title = `${user.username} : Edit Profile`;
    } else {
      document.title = "Edit Profile";
    }
  }, [user]); // Rerun this effect when the user changes

  const changeHandler = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userID}`,
      {
        method: "PUT",
        body: JSON.stringify(user),
      }
    );
    const savedData = await response.json();
    console.log("Saved user!", savedData);
  };

  if (user.id) {
    return (
      <form name="profileEdit" onSubmit={submitHandler}>
        <fieldset>
          <legend>API User ID: {user.id}</legend>
          <div>
            <label htmlFor="username">User Name:</label>
            <input
              id="username"
              name="username"
              type="text"
              required={true}
              value={user.username}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              required={true}
              value={user.email}
              onChange={changeHandler}
            />
          </div>
          <button type="submit">Save</button>
        </fieldset>
      </form>
    );
  }
  return "Loading...";
}

export default ProfileEdit;

// Afterward, modify the ProfileEdit.useEffect() function to return a cleanup function that cancels the fetch() call as you quickly click various user ID buttons.

// Notice that the ProfileEdit component first renders with {userId: 1}. As you quickly click through the user ID buttons, the ProfileEdit component doesn't re-render—it continues to display {userId: 1}. Once you stop clicking the user ID buttons, it will re-render only when the fetch() call returns. Why does this happen? It's because the user state of the ProfileEdit component doesn't change until the fetch() call returns. Every time that you click a user ID button, the pending fetch() call is canceled.

// Finally, add setUser( {} ); as the first line of ProfileEdit.useEffect().

useEffect(() => {
    setUser({});
    const abortController = new AbortController();
  
    async function loadUser() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userID}`,
          { signal: abortController.signal }
        );
        const userFromAPI = await response.json();
        setUser(userFromAPI);
      } catch (error) {
        if (error.name === "AbortError") {
          // Ignore `AbortError`
          console.log("Aborted", userID);
        } else {
          throw error;
        }
      }
    }
  
    loadUser();
  
    return () => abortController.abort();
  }, [userID]);
  
// Now, the user ID and API user ID are always in sync, and "Loading..." is displayed during any pending fetch() calls