// Rendering with React

// Components and props

// overview: React components allow you to split your application into reusable pieces. You can create your own elements that are specific to your app to factor the code into easy-to-understand pieces.

// terms:

    // functional component: A JavaScript function that returns JSX

    // prop: An input passed into a React component as an object

// reference: getting-started-with-react


// Defining Components

    // Although React allows you to define components with classes or functions, so far in this module we have been using functional components.

        // A functional component is a function that returns JSX.

    // Here is an App component that displays a generic message in a <p> element:

    function App() {
        return <p>Welcome back, valued customer!</p>;
    };

    // You can render this component much like you would render any other element, as you already are doing in the index.js file when you are rendering this component:

    <App />

    // As your App component gets more complex, you will find it helpful to break it up into smaller components.

    // Rather than printing the welcome message within the App component, you could remove it and place that message into a new WelcomeBack component. And then within the App component, you can make use of the WelcomeBack component by calling it using <WelcomeBack />.

    function WelcomeBack() {
        return <p>Welcome back, valued customer!</p>;
    };
      
    function App() {
        return <WelcomeBack />;
    };

    // By wrapping your returned element in a React fragment and using parentheses () to contain the multiple lines of code, you can make use of the WelcomeBack component as often as you want within the App component.

    function WelcomeBack() {
        return <p>Welcome back, valued customer!</p>;
    }
      
    function App() {
        return (
          <>
            <WelcomeBack />
            <WelcomeBack />
          </>
        );
    }

// Unlike vanilla JavaScript functions, React functional components begin with a capital letter (in the format WelcomeBack).

    // you can use the same component multiple times and you can also add as many components as you would like. Take a look:

    function WelcomeBack() {
        return <p>Welcome back, valued customer!</p>;
    }
      
    function EncouragingWords() {
        return <p>Believe you can and you’re halfway there.</p>;
    }
    
    function DailyTip() {
        return <p>Highlight a whole paragraph by triple-clicking on it.</p>;
    }
    
    function App() {
        return (
          <>
            <WelcomeBack />
            <WelcomeBack />
            <EncouragingWords />
            <DailyTip />
          </>
        );
    };

// Defining a Component with Props

    // Generally, calling the same component multiple times doesn't hold much value, unless you make your components customizable.

    // Components can take arguments, called props, which you can use to customize the element.

    // Props are inputs passed into a React component as an object. They allow for data to flow from one component down to its children components.

    // Below, the WelcomeBack component is redefined so that it makes use of the props parameter. 

    function WelcomeBack(props) {
        return <p>Welcome back, {props.name}!</p>;
    };
    
    // When rendering the component, you can specify the value of the name prop as follows:

        // <WelcomeBack name="Joe" />

    // This will result in the following being rendered to the page:

        // <p>Welcome back, Joe!</p>

    // Use argument destructuring to further simplify the function, like so:

    function WelcomeBack({name}) {
        return <p>Welcome back, {name}!</p>
    };

    // Below, the WelcomeBack component is rendered twice, with a different value for name each time

    function App() {
        return (
          <>
            <WelcomeBack name="Joe" />
            <WelcomeBack name="Anna" />
          </>
        );
    };

    // This will result in the following to be rendered

        // <p>Welcome back, Joe!</p>
        // <p>Welcome back, Anna!</p>

    // If there is no name property passed in then our rendered message will look odd

        // <p>Welcome back, !<p>

    // To fix this we set a default value for the property

    function WelcomeBack({ name = "valued customer" }) {
        return <p>Welcome back, {name}!</p>;
    };

    function App() {
        return (
          <>
            <WelcomeBack name="Joe" />
            <WelcomeBack name="Anna" />
            <WelcomeBack />
          </>
        );
    };

    // our rendered message will now look like this:

        // <p>Welcome back, Joe!</p>
        // <p>Welcome back, Anna!</p>
        // <p>Welcome back, valued customer!</p>

    // As your code gets more complex, you can assign multiple props separated by a comma. You can also assign default values to each prop, like this:

    function WelcomeBack({ name = "valued customer", adjective = "nice" }) {
        return (
          <p>
            Welcome back, {adjective} {name}!
          </p>
        );
    };
      
    function App() {
        return (
          <>
            <WelcomeBack name="Joe" adjective="funny" />
            <WelcomeBack name="Anna" adjective="clever" />
            <WelcomeBack />
          </>
        );
    };

// Component Composition

    // Components are often made up of other components. This is called component composition.

    // Just like in the App component above, many of your components will have other components inside of them, too.

// Component File Structure

    // As your components get more involved, it becomes important to break your code into multiple comonents.

        // This makes your code more readable and easier to modify

    // It's standard to put each component in its own file; this makes it easier to navigate the code.

    // We can break our App above into two component files: App.js and WelcomeBack.js.

        // Each JS file could have a corresponding CSS stylesheet that specifically styles the elements of that component. Typically, the CSS file will share the same name of the component to amke it clearer which component the CSS file is supposed to be styling.

        // you can even add in Header and Footer components

        // take a look:

        // ------ Header.js -------
        import "./Header.css";

        function Header() {
        return <h1>Header to the page.</h1>;
        }

        export default Header;

        // ------ WelcomeBack.js ------
        import "./WelcomeBack.css";

        function WelcomeBack({ name = "valued customer" }) {
        return <p>Welcome back, {name}!</p>;
        }

        export default WelcomeBack;

        // ------ Footer.js ------
        import "./Footer.css";

        function Footer() {
        return <h2>Footer to the page.</h2>;
        }

        export default Footer;

        // ------ App.js -----------
        import "./App.css";
        import Header from "./Header";
        import WelcomeBack from "./WelcomeBack";
        import Footer from "./Footer";

        function App() {
        return (
            <>
            <Header />
            <WelcomeBack name="Joe" />
            <WelcomeBack name="Anna" />
            <WelcomeBack />
            <Footer />
            </>
        );
        }

        export default App;

// Note: You can also end your files with the .jsx extension instead of .js, and you may see both file extensions in this program. There is no difference between the two file extensions, although you should stick with one or the other in your own work.


// ------- QUESTIONS ---------
    // I understand that .jsx and .js are functionally the same but is there an industry standard? No, it seems that you should just us .js because it is already a signifier and a requirement to capitalize the file name.






