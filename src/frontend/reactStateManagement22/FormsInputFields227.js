// React State Management

// Forms With Input Fields

// overview: Forms and inputs provide their own unique challenges in React. In part, this is because several different events can be fired from forms and inputs. Learn how to track a form's state in React by building a component where someone can enter their name and email into input fields.

// terms:

    // controlled component: a form element whose value is managed in React state

// reference react-demos

// Add the following App component to demo app

    // App.js
    function App() {
        return <SubscriberForm />;
    }

    // SubscriberForm.js
    function SubscriberForm() {
        return (
            <form>
                <label htmlFor="name">
                    Enter Your Name:
                    <input type="text" id="name" name="name" />
                </label>
                <label>
                    Your Email:
                    <input id="email" type="email" name="email" />
                </label>
            </form>
        );
    };

        // include imports and exports as needed.

// Controlled Components

    // How can we get access to the value inside of an input field?

    // The following code tracks the changes of a single input field.

    function SubscriberForm() {
        const [name, setName] = useState("");
        const handleNameChange = (event) => setName(event.target.value);

        console.log("current value of name:", name);
        return (
            <form>
                <label htmlFor="name">
                    Enter Your Name:
                    <input
                        id="name"
                        type="text"
                        name="name"
                        onChange={handleNameChange}
                        value={name}
                    />
                </label>
                <label htmlFor="email">
                    Your Email:
                    <input id="email" type="email" name="email" />
                </label>
            </form>
        )
    }

    // the following is true of the above code:

        // the handleNameChange() event is called every time that any change is present in the name input field

        // event.target.value references the current contents of the input field

        // the value attribute of the input field is tied to the name state variable

        // the email field isn't being tracked by state

    // when the above code is run and the name Ada is typed into the form, the logged output will look something like this:

        // "current value of name:" ""
        // "current value of name:" "A"
        // "current value of name:" "Ad"
        // "current value of name:" "Ada"

    // The state value is being updated after every keystroke

    // The name input in the above example is called a controlled component. That is, it's a form element whose value is managed in React state.

// Update SubscriberForm.js to Track changes for the email field

function SubscriberForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const handleNameChange = (event) => setName(event.target.value);
    const handleEmailChange = (event) => setEmail(event.target.value);
  
    console.log("Current value of name:", name);
    console.log("Current value of email:", email);
    return (
      <form>
        <label htmlFor="name">
          Enter Your Name:
          <input
            id="name"
            type="text"
            name="name"
            onChange={handleNameChange}
            value={name}
          />
        </label>
        <label htmlFor="email">
          Your Email:
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleEmailChange}
            value={email}
          />
        </label>
      </form>
    );
}

// Submitting

    // When the form is submitted, it's also possible to capture the submission event.

    // To capture the submission event, use the onSubmit event in the form, as demonstrated below, and give it a function with a name like handleSubmit().

    <form onSubmit={handleSubmit}></form>

    // inside the handleSubmit() function, you'll need to prevent the default behavior of form submission. Then, we can do whatever we would like with the information that we've collected.

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted:", name, email);
    };

    // finally, you'll need to add a Submit button inside the form, like so:

    <button type="submit">Submit</button>

    // Clear the Form After Submit

        // do this by seeting the state of name and email to be empty strings

        const handleSubmit = (event) => {
            event.preventDefault();
            console.log("Submitted:", name, email);

            setName("");
            setEmail("");
        }

// Managing A List of Subscribers

    // Imagine that you work at a high-tech magazine and you're building an admin tool that allows the customer support department to add and remove subscribers from the system.

    // Whenever customer support submits the form, the new subscriber should be displayed on the page. For example, if you submit the form with a name of Jane Doe and an email of jane.doe@gmail.com, you should ge the following result:

    <img src="images/subscriberFormMock.png" alt=""  />

    // And if you then submit the form with a name of John Doe and an email of john.doe@gmail.com, the new subscriber should be added to the top of the subscriber list.

    // The customer support department should be able to add as many subscribers as they like, and they should be able to remove a subscriber from the list by pressing Unsubscribe.

    // Start by thinking about the new components that you'd need to build for this new feature. Remember the single-responsibility principle, which states that each component should only perform a single responsibility or function. With that in mind, it's reasonable to create new components that are responsible only for displaying the list of subscribers.

    // Below, you will create two new components: SubscriberList and SubscriberView. Each SubscriberView component is responsible for displaying the name, email, and "Unsubscribe" button for each subscriber, whereas the SubscriberList component simply displays a list of SubscriberView components.

    // You should also think about any state that needs to be stored in the application. Because the app now has a list of subscriber data that gets updated whenever the form is submitted, you'd have to store the subscribers data in state.

    // Which component should the subscribers state be stored in? Earlier in the module, you learned about the concept of lifting state up; you learned that sibling components cannot easily share state with each other directly, but that parent components can easily pass their state down to their children components.

    // So because the SubscriberForm and SubscriberList components both need access to the subscribers state, you can store the state in the parent component, which is the App component in this case. The App component will then pass the state down to the SubscriberForm and SubscriberList components via props.

// DO THIS Update the App component

// App.js
import { useState } from "react";
import SubscriberForm from "./SubscriberForm";
import SubscriberList from "./SubscriberList";

function App() {
  const [subscribers, setSubscribers] = useState([]);

  const createSubscriber = (newSubscriber) =>
    setSubscribers((currentSubscribers) => [
      newSubscriber,
      ...currentSubscribers,
    ]);

  const deleteSubscriber = (indexToDelete) =>
    setSubscribers((currentSubscribers) =>
      currentSubscribers.filter((post, index) => index !== indexToDelete)
    );

  return (
    <>
      <SubscriberForm createSubscriber={createSubscriber} />
      <SubscriberList
        subscribers={subscribers}
        deleteSubscriber={deleteSubscriber}
      />
    </>
  );
}

    // Here, App is the parent component of the SubscriberForm and SubscriberList components. To allow these components access to the subscribers state and handlers, App passes them down through props.

// Create the SubscriberList component

// SubscriberList.js

import SubscriberView from "./SubscriberView";

function SubscriberList({ subscribers, deleteSubscriber }) {
  return (
    <>
      <h2>Subscribers</h2>
      <ul>
        {subscribers.map((subscriber, index) => (
          <SubscriberView
            deleteSubscriber={() => deleteSubscriber(index)}
            key={index}
            subscriber={subscriber}
          />
        ))}
      </ul>
    </>
  );
}

export default SubscriberList;

    // The SubscriberList component simply returns some JSX containing a h2 heading and a list of subscribers. Here, you'll map through the list of subscribers (which are available via props) and render each subscriber using the SubscriberView component, which you will create next.

    // Note that the SubscriberList component also passes down the deleteSubscriber() handler as a prop to the SubscriberView component, because the SubscriberView component will have a delete button that relies on this handler to work properly.

// Create the SubscriberView Component

// SubscriberView.js

function SubscriberView({ subscriber, deleteSubscriber }) {
    return (
      <li>
        <p>Name: {subscriber.name}</p>
        <p>Email: {subscriber.email}</p>
        <button name="delete" onClick={deleteSubscriber}>
          Unsubscribe
        </button>
      </li>
    );
  }
  
  export default SubscriberView;

    // The SubscriberView component returns some JSX containing the subscriber's name and email, and a button that when clicked will invoke the deleteSubscriber() handler that's available via props.

// Update the SubscriberForm Component

  // Because you have now created a handler for creating a new subscriber, you need to call this method once the form is submitted. You will need to update the SubscriberForm component so that it can access the createSubscriber function.

  // change the function declaration
  function SubscriberForm({ createSubscriber }) {...}

    // update the handleSubmit() function
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted:", name, email);
        createSubscriber({name, email});
        setName("");
        setEmail("");
    };

    // you will see the subscriber list populate once you submit the form

    // The frontend of your admin tool feature will now be complete, so try it out in the browser. Note that every time you refresh your browser, the list of subscribers will get reset because the data is only stored temporarily in an array.