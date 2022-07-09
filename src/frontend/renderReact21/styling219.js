// Rendering with React

// Styling 21.9

// overview: explore the ins and outs of working with CSS in React

// Clearing your default CSS files

    // Create React App supplies many CSS rules. It is easier to go in and delete them rather than explaining and updating all the prewritten styles

// CSS Files with React

    // When necessary, you may want to assign each component a corresponding CSS stylesheet with the same name to help identify the files that you'll also need to create.

    // WelcomeBack.js
        import "./WelcomeBack.css";

        function WelcomeBack({ name = "valued customer" }) {
            return <p>Welcome back, {name}!</p>;
        }

        export default WelcomeBack;

    // App.js
        import "./App.css";
        import WelcomeBack from "./WelcomeBack";

        function App() {
            return (
                <>
                    <WelcomeBack name="Joe" />
                </>
            );
        }

        export default App;

    // index.js
        import React from "react";
        import ReactDOM from "react-dom";
        import "./index.css";
        import App from "./App";

        ReactDOM.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>,
            document.getElementById("root")
        );

    // In the above example, there are three JS files: index.js, App.js, and WelcomBack.js. They each have a corresponding stylesheet. Right now you don't have much in each component files so it may seem like overkill, but it will reinforce a good habit to have when working on larger projects.

    // Keep in mind that index.css is best used to contain all the global styles that affect the entire application. This includes all styles for general typography, including rules for the headings and paragraphs. The individual CSS files that have matching names to the components are necessary only when unique styles are needed for those particular components. If you aren't using unique styles for specific components, then you don't need to create and then link to empty CSS stylesheets for every component.

    // Adding CSS to External Stylesheets

        // CSS works with JSX the same way that it does with HTML. When using CSS to target an element (like a p paragraph) or a class (like .username), you'll write the CSS within an external stylesheet exactly the same way that you would with HTML.

        /* WelcomeBack.css */
            p {
                color: black;
                font-family: sans-serif;
            }
            
            .username {
                color: #fff;
                padding: 2px 4px;
                margin-right: 2px;
                background-color: #000;
                border-radius: 4px;
            }

    // The first big difference in applying this CSS is that you cannot use a class attribute in JSX; you need to refer to that attribute as className. This is because class is a unique keyword in JS and JSX is an extension of JS. Also, keep in mind that JSX always uses camelCase.
    
    // So, within the WelcomeBack.css file, the p style will be assigned to all paragraphs. When you want to apply the class .username, you can do so by applying it as className. And the <span> used in this example is just a simple JSX element; it's similar to a <div>, but it's an inline element—which means that it doesn't force the content onto a new line like a <div> container. That makes it perfect for styling a word or phrase within a paragraph slightly differently than the rest of the paragraph.

        // WelcomeBack.js
            import "./WelcomeBack.css";

            function WelcomeBack({ name = "valued customer" }) {
                return (
                    <p>
                    Welcome back, <span className="username">{name}</span>!
                    </p>
                );
            }

            export default WelcomeBack;

// Inline styling

    // To demonstrate an inline style added to the internal styles, the paragraph in the example below was wrapped within a <div> container. The <div> was then given specific styles that, in this case, probably wouldn't be applied anywhere else.

    // Note that there are also several small differences in how inline styles are written in JSX. The style attribute needs to be set to an object that contains the CSS properties that you want to set on the element. Within this object, two-word CSS properties need to be written in camelCase, like textAlign. And the values to the properties need to be passed as strings, so they need to be wrapped in quotation marks. Here's an example:

        return (
            <div style={{ border: "1px solid #000", textAlign: "center", borderRadius: "4px" }}>
            <p>Welcome back, {name}!</p>
            </div>
        )
    } 

    // If you have a few CSS rules, like in the WelcomeBack.css stylesheet that was imported into the WelcomeBack.js file earlier in this lesson, those rules can be applied to the JSX by storing the styles within variables and assigning the values of those variables to the inline styles. This is a great way to keep your inline styles more readable and organized.

    // Here is the WelcomeBack.js file updated with only inline styles:

       // WelcomeBack.js
        function WelcomeBack({ name = "valued customer" }) {
            const pStyle = {
                color: "black",
                fontFamily: "sans-serif",
            };
            const userName = {
                padding: "2px 4px",
                marginRight: "2px",
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "4px",
            };
        
            return (
                <p style={pStyle}>
                    Welcome back, <span style={userName}>{name}</span>!
                </p>
            );
        }
        
        export default WelcomeBack; 

    // The variable names pStyle and userName can be any variable name that you want.

// Adding Bootstrap

    // Previously, if you wanted to include an external stylesheet, you would place a link to it in the <head> element of the HTML. You can do the same thing in React.

    // For example, if you wanted to add the Bootstrap CDN to your React application, you would go into the public directory and add the Bootstrap stylesheet <link> to the <head> element of the index.html file. Bootstrap would then be included for your entire project.

    // Remember that you must use className instead of the class attribute. That means that if you copy a component over from Bootstrap, you will need to change all occurrences of class to be className.

    // For example, you can use the .card and .card-body classes to render the card component like this:

    // <div className="card">
        // <div className="card-body">This is some text within a card body.</div>
    // </div>

// DO THIS

    // First, add the Bootstrap stylesheet <link> to the <head> element of the index.html file.

    // Next, create a new React component that primarily uses Bootstrap for styling. Here, you will use a Bootstrap card. Specifically, you should use the Quote option under the Header and footer section.

    // In the src folder, create a new file called Quote.js. Add the following code:

    function Quote({ quote: { text, author } }) {
        return (
          <div className="card">
            <div className="card-header">Quote of the Day</div>
            <div className="card-body">
              <blockquote className="blockquote">
                <p>{text}</p>
                <footer className="blockquote-footer">{author}</footer>
              </blockquote>
            </div>
          </div>
        );
      }
      
      export default Quote;

      import "./App.css";
      import WelcomeBack from "./WelcomeBack";
      import Quote from "./Quote";
      
      const quote = {
        text:
          "I am great believer in luck, and I find the harder I work, the more I have of it.",
        author: "Thomas Jefferson",
      };
      
      function App() {
        return (
          <>
            <WelcomeBack name="Joe" />
            <Quote quote={quote} />
          </>
        );
      }
      
      export default App;


// Adding Google Fonts

    // Google Fonts is a library of free and interesting font families that you can include in your project. There are several ways to incorporate Google Fonts into your project. One way is to include the <link> tag inside an HTML file, just like how you would include a regular stylesheet.

// DO THIS

      // Add the Zen Dots font

        // Go ahead and add a font family called Zen Dots to the project. First, go to the Google Fonts website and look up Zen Dots using the search bar at the top-left corner of the page:

        // click the Zen Dots card. Then, on the next page, click the + Select this style button:

        // A menu will slide out from the right. Under the Use on the web section, copy both of the provided <link> tags:

        // The preconnect link tag speeds up the downloading of the font files, so it's important to include it

        // In the index.html file within the public folder, paste the copied lines anywhere inside the <head> section.

        // Next, use the Zen Dots font family to style the paragraph tag inside the WelcomeBack component, like this:

        function WelcomeBack({ name = "valued customer" }) {
            const pStyle = {
              color: "black",
              fontFamily: "Zen Dots, cursive",
            };
            const userName = {
              padding: "2px 4px",
              marginRight: "2px",
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "4px",
            };
          
            return (
              <p style={pStyle}>
                Welcome back, <span style={userName}>{name}</span>!
              </p>
            );
          }
          
          export default WelcomeBack;

// Note that you're using cursive as a fallback font typeface here. If, for some reason, the Zen Dots doesn't load properly in your project, then React will use the default cursive typeface that's available on your computer's operating system.

        