// React State Management 22

// State Over Multiple Components 22.5

// overview: Imagine that you want to build a page that has a header at the top with buttons that change the appearance of the whole page. For example, imagine that the header has buttons to log in and log out, change the color theme, and change the font size. These buttons will affect the appearance of several components on the page. In this lesson, you'll learn how to build such a page.

// terms: 

    // lifting up state: the process of moving state higher up in a component tree, enabling state to be passed from a parent component to multiple children

// Use a base React App

    // App.js
    function App() {
        return (
          <div>
            <Header />
            <Content />
          </div>
        );
    }

    // Header.js
    function Header() {
        // TODO: define loggedIn
        return (
        <button onClick={/* TODO */}>{loggedIn ? "Log Out" : "Log In"}</button>
        );
    }
  
  // Content.js
  function Content() {
    // TODO: define loggedIn
    return loggedIn && <p>CONTENT</p>;
  }

  // In this example, App is the parent component and Header and Content are child components. Header and Content are considered sibling components to each other.

// Lifting up state

  // The program that you are building has three different components: App, Header, and Content.

  // You might imagine that the Header component contains the loggedIn state. But this wouldn't work well, because the Content component needs access to the loggedIn state to know what to display.

  // Siblings cannot share state.

    // Props are on passed to parent to child. Not sibling to sibling. Not child to parent.

// So, for both the Header and the Content components to have access to the loggedIn state, you need to hold that state in the App component and pass it to the children through props.

// Also, the Header component needs to be able to update the loggedIn state when the user presses the button. The toggleLoggedIn() function below can be passed down as a prop to the Header component.

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const toggleLoggedIn = () => setLoggedIn(!loggedIn);
    return (
      <div>
        <Header loggedIn={loggedIn} handleLoggedInClick={toggleLoggedIn} />
        <Content loggedIn={loggedIn} />
      </div>
    );
}

// Then you can complete the Content and Header components to use the props that are passed to them from the App component.

// Header.js
function Header({ loggedIn, handleLoggedInClick }) {
    return (
      <button onClick={handleLoggedInClick}>
        {loggedIn ? "Log Out" : "Log In"}
      </button>
    );
}
  
  // Content.js
  function Content({ loggedIn }) {
    return loggedIn && <p>CONTENT</p>;
  }

// This concept is generally referred to as lifting up state. State moves from child component "higher" up the comonent tree. With state higher up in the tree, the data can flow downward more easily.

// State As Props

  // When you pass down state to children components, your state becomes part of the props for the child component. In this way, children components don't necessarily distinguish between state and props.

  // For example, you could update your Content component to include a text prop that could be passed in, as shown below:

  // In App.js
    <Content loggedIn={loggedIn} text="My content." />;

  // Content.js
    function Content({ loggedIn, text }) {
        return loggedIn && <p>{text}</p>;
    }

    //This way, in App.js, loggedIn is a part of the potentially changing state for that component. But in Content.js, loggedIn looks like just another property.