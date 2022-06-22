// Rendering with React

// React testing

// overview: As your React codebase grows in size and complexity, having automated tests is important to ensure that nothing is broken every time a developer adds new code to the codebase. 

// Starter code starter-react-testing

// React Testing Library and Jest

    // https://github.com/testing-library/react-testing-library

    // React Testing Library provides a set of helper methods that allow you to build tests that use your React components the way that a user would. Tests written with utilities from React Testing Library query the DOM in the same way that the user would; for example, they find links and buttons by their text.

    // Jest is a testing framework that includes a test runner as well as an assertion library that exposes helper methods that can be used to make assertions about the component being tested.


// The starter-react-testing repo was bootstrapped with Create React App. Conveniently, projects created with Create React App already come preinstalled and preconfigured with React Testing Library and Jest.

// Jest will look for test files stored inside of folders titled __tests__. In the starter-react-testing repo, all the test files are stored in the src/__tests__ folder. 

// Standard practice for each component to have a different corresponding test file

// The src/setupTests.js is a special Create React App file that allows you to perform a global setup before running your tests. It will be automatically executed before running your tests.

    // Inside this file, the single import statement (import"@testin-library/jest-dom";) loads the jest-dom-library into every test file.

    // https://github.com/testing-library/jest-dom

    // The jest-dom library adds custom matchers for performing assertions on DOM nodes (such as toHaveTextContent() or toBeInTheDocument())

// The npm text command

    // In Create React App, the npm test command by default runs the tests in watch mode, meaning that the tests will automatically rerun every time that a change is made to a test file.

        // It also provides options to run all your tests or just a subset of them.

        // Under the hood, npm test runs the tests using a special package called react-scripts. The react-scripts package contains special configurations that help optimize your Create React App project.

// Smoke Tests

    // Different projects may choose different testing techniques based on how often components are updated and how much logic they contain.

    // Although there are many ways to test a component, the simplest way is to use a smoke test that verifies that a component can render without throwing an error.

    // Smoke tests provide tremendous value with minimal code, so they are a great starting point.

    // To render a component in a test environment, you will need to use the render() method from the React Testing Library, like this:

        render(<SomeComponent />);

        // The render() method accepts a component as an argument, and it simply renders the component into a container which is then appended to document.body

    // DO THIS

        // Create A Smoke Test for App

        // App.test.js
        import { render } from "@testing-library/react";
        import App from "../App";

        describe("App", () => {
            test("renders without crashing", () => {
                render(<App />);
            });
        });

    // The render() method and the App component are imported into the file. The describe block groups together all the tests related to the App component. Within the describe block, there is a single test that mounts the App component and verifies that it didn't throw during rendering.

// Render Tests

    // Even if a component can render without throwing an error, it is also important to ensure that it is displaying the correct content to the user.
        
        // For example, the App component is expected to render three Welcome back messages, each containing a different customer name. You can also write tests to verify that the component is rendering the proper content on the screen.

    // The screen object, which is imported from the React Testing Library, gives you access to a variety of helper methods that allow you to query the DOM where your component has been rendered.

        // https://testing-library.com/docs/queries/about/

        // An example of a query method is getByText(), which returns the matching element for a query and throws and error if no elements match or if more than one match is found.

        // For example, you can use getByText() to write a test that checks for the presence of specific test after a component has rendered:
    
        render(<SomeComponent />);
        const text = screen.getByText("Some important text.");

        // you can then perform assertions on text to determine, for example, if it is present in the DOM, using the toBeInTheDocument() assertion method from the jest-dom library.

    // DO THIS Creae a Test for Header

        // Header.test.js

        import { render, screen } from "@testing-library/react";
        import Header from "../Header";

        describe("Header", () => {
        test("renders the heading", () => {
            render(<Header />);
            const heading = screen.getByText("Header to the page.");
            expect(heading).toBeInTheDocument();
        });
        });

    // Above breakdown:

        // render(<Header />); renders the Header component into a container which is attached to the test DOM

        // const heading = screen.getByText("Header to the page."); queries the DOM for the Header to the page. text, which is the desired heading for the component

        // expect(heading).toBeInTheDocument(); asserts that the desired heading is present in the DOM.

// Using Regex In The Query

    // If you're only interested in a partial substring match while querying the DOM, you can also pass a regex, instead of a string, as an argument to getByText(). That will look like this:

    render(<SomeComponent />);
    const text = screen.getByText(/some important text/i);

    // specifying i at the end of the regex allows casing to be ignored when querying the DOM. So, for example, "SOME important TeXt" would be considered a match for this regex

// DO THIS Create a test for Footer

    // Suppose that you would like to make sure that the word footer is part of the Footer component text. 

    // Footer.test.js

    import { render, screen } from "@testing-library/react";
    import Footer from "../Footer";
    
    describe("Footer", () => {
      test("renders the footer text", () => {
        render(<Footer />);
        const footerText = screen.getByText(/footer/i);
        expect(footerText).toBeInTheDocument();
      });
    });

    // This time, instead of passing a string to getByText(), you are passing a regex /footer/i as a matching query.

// DO THIS Create Tests for WelcomeBack

    // You can write tests to ensure that htis ocmponent is rendering the props properly.

    // WelcomeBack.test.js

    import { render, screen } from "@testing-library/react";
    import WelcomeBack from "../WelcomeBack";
    
    describe("WelcomeBack", () => {
      test("renders the default value without a name prop", () => {
        render(<WelcomeBack />);
        const text = screen.getByText("Welcome back, valued customer!");
        expect(text).toBeInTheDocument();
      });
    
      test("renders the customer name passed as a prop", () => {
        render(<WelcomeBack name="John" />);
        const text = screen.getByText("Welcome back, John!");
        expect(text).toBeInTheDocument();
      });
    });
    
    // Here you are testing two of the component's desired behaviors. The first test verifies that the component renders a message containing a default customer name if no name prop is specified. And the second test verifies tha the component renders a message containing the name prop.

// Query More Than A Single Element

        // Up until now, you have been using the getByText() method, which returns a single element if there's a match. However, it is common for a test to query a list of matching elements. If this is the case, you can use the getAllByText() method, which returns an array of all matching elements for a query, and throws an error if no elements match.

//  DO THIS Create a test for App

    // App.test.js

    test("renders three Welcome back messages", () => {
        render(<App />);
        const messages = screen.getAllByText(/welcome back/i);
        expect(messages).toHaveLength(3);
      });

      // const messages = screen.getAllByText(/welcome back/i); stores the array of matched elements in messages. expect(messages).toHaveLength(3); asserts that the messages array should contain three matched elements, which is what you'd expect given that App wraps three WelcomeBack components.

// As your React components become more complex, you can also write tests to cover other common use cases. For example, you can simulate user interactions with the component (such as clicking a button in a React component). You can also mock asynchronous operations (such as making an API call) that occur within a component.

      // https://testing-library.com/docs/ecosystem-user-event/

    