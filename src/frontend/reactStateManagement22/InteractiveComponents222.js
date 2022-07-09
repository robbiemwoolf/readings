// React State Management 22

    // overview: In React, changing the view is handled primarily by changing something called state. React's component structure makes it so that managing the state of your application is much more organized and predictable. 

// Interactive Components 22.2

    // overview: Learn how to build interactive components that allow the user of the website to modify the overall state of the page

    // terms:

        // hook: a special React function that gives you access to some React process

        // one-way data flow: also called one-way binding, the idea that changes in the props or state will cascade downward to effect changes further on

// What is state?

    // The term state and how it relates to React has its origins with the state machine.

    // Generally, when a user presses a button or enters data in a form, you will want to store some information. React components use state to store information that is updated by the component. State refers to data that affects how an application behaves and is rendered.

    // Every React component can have its own state.

// Handling Events

    // Button

        // This function logs to the console when the button is clicked
        <button onClick={() => console.log("Subscribing!")}>Subscribe</button>

        // If you have more that you want to do, you can write a named function instead of an anonymous function:
        const handleClick = () => {
            console.log("Subscribing!");
            alert("You subscribed!");
        }; 

        <button onClick={handleClick}>Subscribe</button>

// DO THIS Add An Event Handler

    // In the App.js of the React application that you created, add a button to the page. Give it the following function as the value to tis onClick attribute.

    const handleClick = (event) => console.log(event.target);

    // When we render the page, and click the button, the button's DOM element is logged out.

        // This gives us proof that we added an event listener to the button.

// Props Versus State

    // When the user presses a button, you will usually want to store some information in the application state. For example, when you submit a post on a social media site, that post might be saved in the application state itself.

    // Recall that components are pure functions - they should never edit the props.

        // If the props need to change, they are edited by the parent component.

    // State, on the other hand, is where the component stores information that it can modify.

        // Parent components do not have access to the state of their child components.

// The useState() hook

    // App.js
    import React from "react";

    function App() {
        const handleSubscribe = (e) => console.log("User has been subscribed...");

        return (
            <section>
                <p>Please click to subscribe to my updates!</p>
                <button onClick={handleSubscribe}>Subscribe</button>
            </section>
        );
    }

    export default App;

    // When the user clicks the button, a message will be logged, but no feedback will be given to the user.

    // In order to create and edit the state - which can allow you to change the interface - you need to use the useState() hook.

        // A hook is a special React function that gives you access to (or hooks into) some React process.

            // So useState() hooks into the component's state.

    // To use the useState() hook, you will first need to add it to your import statement, like this:

    import React, { useState } from "react";
    
    // Now, inside of your component, you can call useState(), as follows:

    const [subscribed, setSubscribed] = useState(false);

    // The code above creates a new state variable called subscribed. The useState() function takes the initial value of the state variable (in this case, false).

    // The convention for creating a state variable with useState() is to name the function set[VariableName].

// DO THIS Update Your Code To Use The State

    // App.js

    import React, { useState } from "react";

    function App() {
      const [subscribed, setSubscribed] = useState(false);
    
      return (
        <section>
          <p>Please click to subscribe to my updates!</p>
          <button onClick={() => setSubscribed(true)}>Subscribe</button>
        </section>
      );
    }
    
    export default App;

    // right now when you click the button, the state will change, but nothing on the page will change

    // Make Use of the State

        // Update the text of your button with the info below:

        <button onClick={() => setSubscribed(true)}>
            {subscribed ? "Unsubscribe" : "Subscribe"}
        </button>;

        // Update with the below code to toggle between Unsubscribe and Subscribe.

        <button onClick={() => setSubscribed(true)}>
            {subscribed ? "Unsubscribe" : "Subscribe"}
        </button>;

// Re-rendering

    // Above, whenever the state is updated, the component re-renders using the new information. This means the entire component gets called again - including all of the code inside of the component function.

        // This is an important concept in React.

        // When the props or state change for a component, that component and its children are re-rendered with the new information. This allows changes to flow downward.

        // Data flows from parent components down to the child components, making changes as needed, this is generally know as one-way data flow.

        // The parent component's data is the single source of truth of how that component and its children should render.

// DO THIS Watch the Re-render

    // add the following log() statement right above the return statement in your component

    console.log("Subscribed status:", subscribed);

    // Then, on your application's page, open up the web console and click the button. You will see the log() statement show up each time that you click.

        // Note: You'll notice that the logs actually appear twice. This is because of the React.Strict component wrapper.

// Never edit the state directly!

    // To update the state and cause the component to re-render, you will always need to use the function provided by useState(). Setting the state directly will not do this.

    // THE FOLLOWING CODE WILL NOT RUN CORRECTLY

    <button onClick={() => (subscribed = !subscribed)}>
        {subscribed ? "Unsubscribe" : "Subscribe"}
    </button>

// Multiple States

    // You can call the useState() function multiple times. This is common for complex components.

    // For example, take a look at the following component, which includes two different calls of useState(). Each state value can be changed independently of the other.

    function App() {
        const [subscribed, setSubscribed] = useState(false);
        const [alerts, setAlerts] = useState(false);
      
        return (
          <section>
            <p>Please click to subscribe to my updates!</p>
            <button onClick={() => setSubscribed(!subscribed)}>
              {subscribed ? "Unsubscribe" : "Subscribe"}
            </button>
            <button onClick={() => setAlerts(!alerts)}>
              {alerts ? "Stop Email Alerts" : "Get Email Alerts"}
            </button>
          </section>
        );
    }

    