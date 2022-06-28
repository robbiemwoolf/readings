// React Router 25

    // overview: Learn how to use React Router, which is the de facto library for linking a URL and React application together. You'll also learn the difference between backend (traditional) routing and frontend (React) routing.

    // terms:

        // backend routing: routing in which every page sends a request to the server for an HTML file, and every page requires the browser to download, parse, and a render a new HTML file

        // frontend routing: routing that is handled from the browser, and the browser only sends a request to the server when necessary

        // routing: the process of keeping the browser URL in sync with what's displayed on the page

    // Routing is key to all websites, and it comes into play whenever you use a URL in your application.

    // Traditional websites use backend routing and generally speaking they need more computing power and internet bandwidth because more data is downloaded. With bakend routing, the server handles almost everything that the visitor does.

    // In contrast, frontend routing happens in the browser. In a single-page application(SPA), like those built with React, there is no request to the server for every page that you visit. The frontend router tells the application to redraw part of the page, without telling the server.

    // Generally speaking, frontend routing is a better user experience. With frontend routing, the browser only sends a request to the server when necessary.

// Using Router, Switch, Route, and Link 25.2

    // overview: React Router has a simple API with powerful features. When you're building your app in React, React Router can help you make the URL your first thought, rather than an afterthought.

// Frontend Routing

    // As the visitor navigates around the site, they expect the URL to change along with the content on the page.

    // Frontend navigation offers many benefits:

        // it allows visitors to bookmark pages
        // it allows visitors to share links to specific content and pages
        // it allows visitors to move forward and backward in their browsing history
        // routing between views is generally faster than backend routing.
        // smooth transitions and animations between views are easier to implement
        // breaking up your code by page helps promote modularity

    // You stil need backend routes for resources such as images, JavaScript, CSS, API calls, and the index.html file that is your SPA.

import React from "react";

// All components in one file for simplicity only

function Home() {
  return <p>Home</p>;
}

function About() {
  return <p>About</p>;
}

function App() {
  return (
    <div className="App">
      {window.location.pathname === "/about" ? <About /> : <Home />}
    </div>
  );
}

export default App;

// This doesn't scale adequately. That is where React Router comes in.

// https://v5.reactrouter.com/web/guides/quick-start

    // It wraps around the browser history API and provides declarative syntax to keep your React application UI in sync with the browser's URL.

    // To enable routing in your application, you can use the <Router> component from React Router.

// create-react-app
    // npx create-react-app router-exercise-app
    // cd router-exercise-app
    // npm i react-router-dom@"^5"

// The <Router> component

    // All React apps use the same low-level interface, <Router>, for the router component. This is true regardless of whether you're building a React application that runs in the browser (react-dom), or one that runs on Android and iOS (react-native).

    // In the browser, you use <BrowswerRouter> but alias it as <Router> for readability, as follows:

    import { BrowserRouter as Router } from "react-router-dom";

    // App.js

    import React from 'react';
    import { BrowswerRouter as Router } from 'react-router-dom';

    function App() {
        return (
            <Router>
                <div className='App'></div>
            </Router>
        );
    };

    // <Router> defines the scope of routing within the app. In this case, it wraps everything within the app.

    // Now that we have a <Router> in place, we can use <Router> components to render or hide components based on the URL path.

// The <Route> component

    // May be the most important component in React Router.

    // Responsible for rendering some UI when its path matches the current URL.

    // Wrapping a component with <Route> is similar to wrapping it in an if statement. If the URL matches the path property of the route, the component will be rendered.

    // The path property of the route can be a URL path (like / or /users) or an array of URL paths (like ['about','/contact',...]).

    // TIP: A <Route> without a path always matches.

    import React from "react";
    import { BrowserRouter as Router, Route } from "react-router-dom";

    function Home() {
        return <p>Home</p>;
    }

    function About() {
        return <p>About</p>;
    }

    function App() {
        return (
            <Router>
                <div className="App">
                    <Route path="/">
                    <Home />
                    </Route>
                    <Route path="/about">
                    <About />
                    </Route>
                </div>
            </Router>
        );
    }

    // The above is the CORRECT way to use <Route>, but you may come across old information that uses it like this: <Route path='/about' component={About} />

    // If we render the above code, we see that /about renders both <Home> and <About>.

        // But why is this happening?

            // Because by default, <Route> doesn't use an exact match on the path property.

            // By default, if the URL matches the beginning of the path, it is considered a match. So in this case, a URL of /about matches the path / and the path /about.

        // One way to fix it:

            // The <Route> component has an exact property that, when set to true, means the URL path must exactly match the route path.

               // <Route exact={true} path="/">

        // The routes in this app are mutually exclusive; you only want to render the first <Route> that matches the location. So you can use the <Switch> component to render only one <Route>

// The <Switch> component

    // The <Switch> component will render one of its child <Route> components. It will render only the first <Route> component that has a match. 

    // It checks the path of its child <Route> components in order.

    import React from "react";
    import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

    function Home() {
        return <p>Home</p>;
    }

    function About() {
        return <p>About</p>;
    }

    function App() {
    return (
        <Router>
        <div className="App">
            <Switch>
            {/* by convention `/` is listed first with exact={true} */}
            <Route exact={true} path="/">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            </Switch>
        </div>
        </Router>
    );
    }

    // This is now working like it should.

    // Now, add some <Link> components to the page so that the user can navigate between the Home and About pages without having to type in the address bar.

// The <Link> component

    // The <Link> component provides declarative, accessible navigation around your application.

    // DON'T use regular anchor tags <a> instead of <Link> components. Because they will cause your entire page to reload when the user clicks the link.

    import React from "react";
    import {
        BrowserRouter as Router,
        Link,
        Route,
        Switch,
        useLocation,
    } from "react-router-dom";

    function Home() {
        return <p>Home</p>;
    }

    function About() {
        return <p>About</p>;
    }

    function App() {
        return (
            <Router>
            <div className="App">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Switch>
                <Route exact={true} path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                </Switch>
            </div>
            </Router>
        );
    }

    export default App;

// The <NoMatch> component for unknown routes

    // We want to display the <NoMatch> component when provided a URL path doesn't match one of our routes.

    // NOTE: The useLocation hook returns the location object that represents the current URL.

        // Think of it as a useState that returns a new location whenever the URL changes.

        import { useLocation } from "react-router-dom";

        function NoMatch() {
            const location = useLocation();

            return (
                <h3>
                    No match for <code>{location.pathname}</code>
                </h3>
            );
        }

        // make sure to include <NoMatch /> as your final <Route> in the App()