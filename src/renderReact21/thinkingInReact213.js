// Rendering with React

// Thinking in React

// overview: React apps are broken into pieces called components. React allows you to define your own components, making it possible to split an application's code into easy-to-understand, reusable pieces.

// terms: 

    // single-responsibility principle: A principle that states that each module, function, or component in a program should have responsibility for one single part of the program.


// What is a component?

    // A component is a single part of the user interface and can be reused in multiple places.
        
        // Although a component can be a single HTML element, it's typically a collection of elements

    // Each component in the app has a single responsibility

        // For example, in a web page for a retail site, you may have these components:

            // A menu bar
            // The item listing, with a photo and description of the item
            // A review, of which there may be multiple on the page

// Determining the components

    // Take a look at the following simple application, which keeps track of what the user needs to buy at the grocery store

    // <img src="images/componentsExample.png" alt="">

    // There are a number of different pieces that make up this application

        // At the top, there is an input box for adding a new item to the list

        // The list is made up of any number of items and a title

        // Each list item is also a component, nested inside of the overall list component. The checbox and buttons are included in each list item component.

    // <img src="images/highlightedComponents.png" alt="">

        // At the top, highlighted in green, is the input box for adding an item. This is an AddItem component.

        // Below that, also highlighted in green, is the GroceryList component. Inside the GroceryList component are as many Item components as necessary to represent the list.

        // One of the Item components is highlighted in blue.

// The single responsibility principle

    // How should you decide what should be a component? Use the single-responsibility principle, which means that each component should have one thing that it does.

    // Consider the above example

        // The AddItem component is responsible for adding items to the list.

        // The GroceryList component is responsible for showing a title and all of the items.

        // Each Item component is responsible for showing information about the item, including whether it's been check off or not.

    // Often, as an app grows and more functionality is added to the app, components are further broken down into more components.

// Component composition

    // Components can be made up of other components. In this case, the entire application could be an App component that includes the following:

        // One AddItem component

        // One GroceryList component

        // Any number of Item components, depending on the number of items in the list

    // Determining what components are needed is the first step to building any app.