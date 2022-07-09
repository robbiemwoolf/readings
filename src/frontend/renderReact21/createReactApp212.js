// Rendering with React

    // React is a powerful tool that makes it easier to build complex web applications that rely on DOM manipulation.

    // There are many frontend frameworks that have begun to arise as a way to manage the complexity of DOM manipulation code. Here are some tools that have become popular:
        // Angular JS, Ember.js, Vue, and React

// Create React App

// overview: You need to create numerous files to get a React app running on your computer. Fortunately, there is a script called Create React App that will generate these files for you.

// Creating a React app

    // Create a react application by running the following command in a folder that isn't a Git repository

    // npx create-react-app getting-started-with-react

    // the above command created the getting-started-with-react folder for you

// Running the application

    // the package.json file inside of the newly created React application comes with a few useful scripts, like:

        // npm start

    // once you run the above command, you will see something like this

    /*
        Compiled successfully!

        You can now view getting-started-with-react in the browser.

        Local:            http://localhost:3000
        On Your Network:  http://XX.X.X.XX:3000

        Note that the development build is not optimized.
        To create a production build, use npm run build.
    */

    // if your browser doesn't open automatically, open the browser to the following page:

        // http://localhost:3000

        // this is where your app is hosted on your machine. You will see a sprinting blue React logo. This is the default app that Create React App starts with

// What's happening on your command line?

    // You need to open up a new terminal window when you are running a local server so that you have access to your command line.

    // Use ctrl + c to stop running the local server (DON'T JUST CLOSE THE TERMINAL BC IT MAY STILL BE RUNNING IN THE BACKGROUND)
        // it will ask you if you want to open another port if you already have a local server running, but it is not recommended to do this

// standard files with Create React App

    // The files at the root level of this project typically include JavaScript configuration files like a package.json file and a README.md file.

    // The public folder represents what is available to web browsers. This folder also contains the index.html file, which is the entry point to the application. During the build process, React inserts a script tag referencing the compiled code into the index.html file.

    // The src folder is where most of your React components will be written. Only the files within this folder will be processed by React. This folder will commonly be used to also contain subdirectories for  the files associated with each component, including images and CSS stylesheets.

    // You won't need all these files to get started with React. And at the start of a Create React App project, you can usually delete the following files:

        // public/logo192.png: Smaller PNG of the React logo

        // public/logo512.png: Larger PNG of the React logo

        // src/logo.svg: SVG version of the React logo

        // src/App.test.js: For tests that you aren't using

        // src/reportWebVitals.js: For tests that you aren't using

        // src/setupTests.js: For tests that you aren't using

// How the files connect

    // The index.html file

        // The only thing you may need to change within the head element in getting started is updating the title that will display as the browser title.

        // the body element will look similar to this:

            /*
            <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="root"></div>
            <!--
                This HTML file is a template.
                If you open it directly in the browser, you will see an empty page.
        
                You can add webfonts, meta tags, or analytics to this file.
                The build step will place the bundled scripts into the <body> tag.
        
                To begin the development, run `npm start` or `yarn start`.
                To create a production bundle, use `npm run build` or `yarn build`.
            -->
            </body>
            */

        // take note that the <div> element in the <body> is given the id #root

        // as described above, the build step will place the js that you write into this HTML container

        // you don't need to make any additional changes to this HTML page, unless at some point you want to add HTML elements that are specific to this page and outside the React components that you plan to build

    // The index.js file

        // This is the main js file where you find the demo code for the spinning React logo that you ran on your local server. Let's delete this code and replace it with this:

        import React from 'react';
        import ReactDOM from 'react-dom';
        import './index.css';
        import App from './App';

        ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById("root")
        );

        // import React will make sure that your components are compiled properly

        // import ReactDOM will make sure that the DOM-related methods to display the components into the browser are also compiled properly

        // the imported stylesheet should contain any global CSS styles that can be used within the web page and aren't specific to any component

        // import the App.js file that contains your primary component that will be displayed in the web page

        // React uses the render() function to display the component into the web page.

        // render() function takes two arguments: 

            // the React component to be rendered

            // the DOM container where the react component should be placed

                // the Create React App setup uses the root element as the DOM container

            // the <React.StrictMode> tags enable more helpful warnings during development that we will look at later

    // The App.js file

        // this file is for your app component, it is the main compoent in React which acts as a container for all other components

        // all of the code within the App component will be returned, exported, and then used within the index.js file

        // for this example, replace all of the App.js code with this:

        import "./App.css";

        function App() {
            return <h1>Hello World!</h1>;
        }

        export default App;

        // The first line in App.js will import the CSS stylesheet that should specifically be applied to the App component.

        // Notice that this code uses export default instead of module.exports to export the function. Although you don't need to use a named function, this can be useful for debugging purposes and for readability.

        