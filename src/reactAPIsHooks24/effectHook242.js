// React And APIs With Hooks 24

    // overview: By the end of this module, you will be able to use the React effect hook. You'll be able to manually change the DOM, fetch data, and update React components.

// The Effect Hook 24.2

    // overview: By the end of this lesson, you will be able to fetch and update data from an API and set the document title. To do this, you'll use the effect hook. This lesson introduces the effect hook, useEffect(), which will enable you to perform side effects from React function components. 

// terms: 

    // side effect: anything in a function or expression that affects something outside the scope of the function or expression

// Imagine that you want to write a component that allows a user to update their profile. There are a few steps that you need to take to accomplish this, and it all starts with an API call. Here are the basic steps:

    // When the user clicks Update profile, make an API call to an existing server to return the user's current profile.

    // Allow the user to change their profile via an editable form.

    // When the user clicks Submit, make another API call to save the updated user profile.

// The effect hook, useEffect(), adds the ability to perform side effects from a React function component. A side effect is anything in a React component that affects something outside the scope of the function.

// Understanding Side Effects

    // Note: Side effect (often simply called effect) isn't a term that's specific to React. It's a general concept about the behavior of a function.

        // For example, a function that modifies a DOM element is introducing a side effect; the DOM element doesn't belong to the scope of the current function. If you aren't using React to update the state or render HTML, that's a side effect. Basically, it's any non-React thing.

    // Examples of side effects in React function components:

        // Making asynchronous API calls for data

        // Updating a DOM element

        // Updating a variable that isn't a local variable

        // Using setInterval() or setTimeout()

    // Side effects are sometimes unavoidable.

        // Imagine, for example, that you need a component to fetch data for the current user. When you make an API call to get the data for the specified user, you're introducing a side effect to the function.

// Using the effect hook

    // You can use useEffect() to perform side effects after the state is updated and the component has rendered.

    // You can also specify when it is necessary to rerun the effect.

    // The useEffect() hook accepts two arguments:

        // A function to run the effect

        // An optional array of dependencies for the effect function. These values determine when to rerun the effect.

    // After each rendering - and after updating the DOM - React invokes the function passed to useEffect().

// When is the effect rerun?

    // The optional second parameter to useEffect()—the array of dependencies for the effect function—controls when the effect reruns. 

    // React has three different options for when the effect is rerun

        // Run the effect after every render

            // By default, useEffect() runs after the first render and after every change to props or state

            // The following effect sets the document title after every render

            useEffect(() => {
                document.title = `The time is now ${Date.now()}`;
            });

            // so since we did not give an optional second parameter to useEffect(), React will run the effect after the first render and after every change to props or state.

        // Run the effect once

            // The following effect sets the document title to a value that doesn't use any state variables or props. This effect will run exactly once.

                useEffect(() => {
                    document.title = `Welcome to Thinkful!`;
                }, []); // Pass [] to only apply the effect once

            // Passing an empty array as the second parameter to useEffect(), tells React that the effect doesn't use any value that particpates in the React data flow. This way, React knows that it's safe to run only once.

        // Run the effect when a value changes

            // You can also use state values or prop values to determine when to rerun the effect.

            // After rendering finishes, useEffect() will look over the list of dependency values and call your effect function if any one of them has changed.

            // The following effect sets the document title to a custom message including the number of clicks. This effect will rerun only when the value of count changes.

            // This is one way to increase performance and avoid unnecessary calls.

            const [ count, setCount ] = useState(0);

            useEffect(() => {
                document.title = `You clicked ${count} times`;
            }, [count]); // only rerun the effect if `count` changes

            // if there are multiple items in the array, React will rerun the effect if any one of them changes

// Fetching Data From An API

    // In this section, you will create a component to edit a user profile. To do this, you will make an API call to fetch a user profile onve, when the component is first rendered.

    // You will need an existing server to make the API calls. For this, you will use JSONPlaceholder, which is a free online REST API that you can use whenever you need some fake data. Here, you'll use JSONPlaceholder to fetch and save the user profile data. Note that JSONPlaceholder doesn't really save any of your data, so none of the changes that you make will be saved.

    // TIP: Use the global fetch() function to make API calls.

    function ProfileEdit() {
        const [user, setUser] = useState({});
      
        useEffect(() => {
          async function loadUsers() {
            const response = await fetch(
              "https://jsonplaceholder.typicode.com/users/1"
            );
            const userFromAPI = await response.json();
            setUser(userFromAPI);
          }
          loadUsers();
        }, []); // Passing [] so that it only runs the effect once
      
        if (user.id) {
          // `user.id` is truthy after the API call returns
          return (
            <form name="profileEdit">
              <div>
                <label htmlFor="username">User Name:</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={user.username}
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" value={user.email} />
              </div>
            </form>
          );
        }
        return "Loading...";
    }

    // When this component first renders, user is an empty object, so user.id is falsy and the component displays Loading.... Eventually, the fetch() call returns and calls setUser() with the user that's returned by the API. The call to setUser() causes the component to re-render—and this time, user.id is truthy, so the user information is displayed.

// The async callback

    // The useEffect() callback cannot be an async function. 

        // Therefore, if you want to use async and await, you need to define and call an async function within the useEffect() callback.

        // Alternatively, here's a more concise syntax using the Promise interface:

            useEffect(() => {
                fetch("https://jsonplaceholder.typicode.com/users/1")
                    .then((response) => response.json())
                    .then(setUser);
            }, []);

// Create the <ProfileEdit> component

    // Add the above <ProfileEdit> component to a React application and render it on the page. Afterward, add log() statements to determine when the various bits of code run.

    // Consider adding log() statements in the following locations:

        // Before useEffect(): console.log('render', user)
        // The first line inside of useEffect(): console.log('useEffect')
        // Before setUser(userFromAPI);: console.log('setUser', userFromAPI)

    // You will see at least four log() statements for render() and one log() statement for useEffect(). Remember, passing an empty dependency array ([]) to useEffect() tells React that it is safe to run the effect only once.

// Why is useEffect() needed for API calls?

    // Consider what would happen if you didn't use useEffect().

        // The component would be rendered, triggering a call to fetch(), which would eventually call setUser() and update the state. Every call to update the state would trigger a re-render. The re-render would trigger another call to fetch(), and so on. The code would then be stuck in an infinite re-rendering loop. The same thing will happen if you omit the empty array as the second parameter.

// Saving Data To An API

    // Now, you will add the change and submit handlers to allow the user to make changes and submit the updated profile.

    // First, add the change handler to the input element. In this case, you will use a naming convention to allow you to use the same change handler for each input. For this to work, the name of the input must be exactly the same as the property on the user object.

    const changeHandler = event => {
        setUser({ ...user, [event.target.name]: event.target.value })
      }
      
      <input
        id="username"
        name="username"
        type="text"
        required={true}
        value={user.username}
        onChange={changeHandler}
      />
      
      ...
      
      <input
        id="email"
        name="email"
        type="email"
        required={true}
        value={user.email}
        onChange={changeHandler}
      />

    // By making sure that the name of the input is exactly the same as the corresponding property on the user object, you can use the same change handler on each input.

    // TIP: In other scenarios, you may need to use more than one change handler.

        // For example, if you want to set a value with a number input, you may need to cast the value to a number in your changeHandler() function.

// Debug changeHandler

      // Add the above code to your <ProfileEdit> component. Make sure that you are able to type new values into both of the input boxes.

      // Afterward, change name="username" to name="wrongusername". Now, you can no longer type in the username input box.

      // Why does this happen? The changes are applied to the wrongusername property of the user, and not the username property. So when you type, the value of the input does not change.

      // Next, add the submit handler, which gets called when the form is submitted. The form will submit the modified user information back to the server. Use the following code:

      const submitHandler = async (event) => {
        event.preventDefault();
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${user.id}`,
          {
            method: "PUT",
            body: JSON.stringify(user),
          }
        );
        const savedData = await response.json();
        console.log("Saved user!", savedData);
      };

    // To save data using fetch(), add a second parameter to tell fetch() to use the PUT method and send the current user data as a string in the body of the request.

// Multiple useEffect() calls to separate concerns

    // React allows multiple useEffect() calls inside a component. This allows the effect code to be broken down into multiple functions containing logically related code.

    // Now, you will extend the <ProfileEdit> component to set the document title to include the user's name whenever the user changes. 

      //  With this new functionality, there are multiple side effects that need to run after the component is rendered.

        //  In one, you get the current user.
        
        // In the other, you set the document title.

      // Both of these tasks are logically independent, so they should be separated into multiple useEffect() functions so that they follow the single responsibility principle.

      useEffect(() => {
        if (user.username) {
          document.title = `${user.username} : Edit Profile`;
        } else {
          document.title = "Edit Profile";
        }
      }, [user]); // Rerun this effect when the user changes

    // When the component first renders, the fetch() call hasn't returned yet, so you don't yet know the user's name. After fetch() returns, React notices that the user reference has changed. It reruns the effect, which will then include the username in the title

    // TIP: Don't call hooks inside loops, conditions, or nested functions. Instead, always use hooks at the top level of your React function. By following this rule, you can ensure that hooks are called in the same order each time that a component renders. That's what allows React to correctly preserve the state of hooks between multiple useState() and useEffect() calls.

    function ProfileEdit() {
        const [user, setUser] = useState({});
      
        console.log("render", user);
        useEffect(() => {
          console.log("useEffect");
          async function loadUsers() {
            const response = await fetch(
              "https://jsonplaceholder.typicode.com/users/1"
            );
            const userFromAPI = await response.json();
            console.log("setUser", userFromAPI);
            setUser(userFromAPI);
          }
          loadUsers();
        }, []); // Passing [] so that it only runs the effect once
      
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
            `https://jsonplaceholder.typicode.com/users/${user.id}`,
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
            </form>
          );
        }
        return "Loading...";
      }
      