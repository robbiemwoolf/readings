// Rendering with React

// Introduction to JSX

// overview: Learn the basics of JSX. JSX is an HTML-like syntax for defining user interface elements right inside your React code.

// reference: getting-started-with-react

// Hello World! in React

    <h1>Hello World!</h1> 

    // this line of code inside a js file is JSX not html

// Embedding JavaScript expressions in JSX

    // JSX is an expression, so you can save it to a variable and then return the value of that element, as shown here:

    const element = <h1>Hello World!</h1>;
    return element;

    // You can embed JavaScript code into JSX by using curly braces, like this:

    const name = "Alice";
    const element = <h1>Hello {name}!</h1>;
    return element;

    // now the element will render as Hello Alice!

    // you can put any JavaScript expression inside the curly braces. For example:

    const item ="apple";
    const price = 2;
    const count = 10;
    const element = (
        <div>
            <h1>Total Purchased:</h1>
            <p>
                Purchased {count} {item}s for ${price} each. The total is ${count * price}.
            </p>
        </div>
    ); 
    return element;

    // notice that you can use parentheses to enable all of these elements to take up multiple lines within this element.

    // Update the App.js file in getting-started-with-react

    // as long as your local server is running, you should see your changes updated in the browser

    // Remember, when you export your code from App.js, it will be imported by index.js and then compiled within the index.html page. So, using separate files for each component simply makes this easier to keep organized as your code becomes more complex.

// Attributes

    // You can add attributes to JSX elements much like you can in HTML.

    // here's how you might create a link

        <a href="https://www.thinkful.com/">Thinkful</a>

    // You can use variables in attributes as well. The code below, for example, stores the URL in one variable, the link text in another, and then creates a link tag.

    function App() {
        const url = "https://www.thinkful.com/";
        const linkText = "Visit Thinkful";
        const element = <a href={url}>{linkText}</a>;
      
        return element;
    };

// Top level elements JSX

    // Note that a React component won't allow you to return more than one top level JSX element. 

    // ----- For example, this code returns an ERROR ----------------------

    const element = (
        <h1>Hello World!</h1>
        <h2>Have a good day.</h2>
    );
    return element;

    // a simple solution is to create a single top level JSX element that nests a number of elements

    const element = (
        <div>
          <h1>Hello World!</h1>
          <h2>Have a good day.</h2>
        </div>
    );

    // using a div container works but it is best practice to use a React fragment

// React fragments

    // A React fragment is commonly written with short syntax, like this: <> ... </> It appears as empty tages

    // it's sole purpose is to group elements that are next to each other.

    // Using React fragments is encouraged when you need to return multiple elements buy you don't need a parent container, like a generic <div> container, to hold all the elements.

    const element = (
        <>
          <h1>Hello World!</h1>
          <h2>Have a good day.</h2>
        </>
    );
