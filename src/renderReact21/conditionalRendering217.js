// Rendering With React

// Conditional Rendering

// overview: Learn to use if() and switch() statements to conditionally show certain elements to your users.

// create a new React application called conditional-rendering to use in this lesson

// The if() and switch() statements

    // Take a look at the Greeting component below, which takes language as a prop. It will display different text depending on the language.

    // Greeting.js
    function Greeting({ language }) {
        if (language === "es") {
            return <h1>Hola!</h1>;
        };
    return <h1>Hello!</h1>;
    };

    // to see the difference in the app, we use two Greeting components like this:

    // App.js
    function App() {
        return (
            <div>
                <Greeting language="es" />
                <Greeting />
            </div>
        );
    };

    // In simple cases, you can use an inline if() statement like this:

    // Greeting.js
    function Greeting({ language }) {
        return <h1>{language === "es" ? "Hola" : "Hello"}!</h1>;
    };

    // If you have more than two options you can use a switch() statement, like this:

    // Greeting.js
    function Greeting({ language }) {
        switch (language) {
            case "es":
                return <h1>Hola!</h1>;
            case "fr":
                return <h1>Bonjour!</h1>;
            case "en":
            default:
                return <h1>Hello!</h1>;
        };
    };

// Prevent Rendering

    // Imagine that you are building an application that makes use of a number of notifications. If the user has notifications, you want to notify the user with a message. Otherwise, you want to display nothing.

    // With React, you can display nothing by returning null from a component, as shown here:

    function Notifications({ notifications }) {
        if (notifications.length > 0) {
          return <p>You have {notifications.length} notifications today!</p>;
        }
        return null;
    };
      
    function App() {
        const notifications = ["You received a package", "The weather is sunny"];
        return <Notifications notifications={notifications} />;
    };

    // Note that when the condition is relatively short, it can be useful to use the && operator instead of an if statement, as shown below. If the first value is true, the && operator will return the second value. If the first value is false, it will return the first value (false). When a component returns false, it renders nothing, just like it does if it returns null.

    function Notifications({ notifications }) {
        return (
          notifications.length > 0 && (
            <p>You have {notifications.length} notifications today!</p>
          )
        )
    }; 