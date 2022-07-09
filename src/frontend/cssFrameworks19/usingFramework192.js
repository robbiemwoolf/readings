// CSS frameworks
// Grids

// overview: what is a css framework? how does it work? how can you go about using one in your html and css projects?

// terms:
    // CSS framwork: a library of various web design components that can be applied to multiple projects
    // content delivery network: cdn, a network of servers that helps web page content to load more quickly
    // spaghetti code: a pejorative term used for program code written without a coherent structure


// what is a framework?
    // A framework, when applied to any language, typically refers to reusable code that provides an opinionated solution to common problems.
    // In short, a css framework is css that someone else wrote to help you make incredible websites.

    // these are some time-saving functionalities that are common across most css frameworks:
        // organizing the layout of your page
        // building responsive websites
        // maintaining consistency across your pages

    // in exchange for these benefits, you often have to do the following tasks when using css frameworks:
        // use certain elements or class names
        // organize and nest your elements in a particular way
        // include external stylesheets and potentially external JavaScript

// Examples
    // Twitter Bootstrap https://getbootstrap.com/ 
        // the most popular css framework by far
    // Pure.css https://purecss.io/ 
    // Materialize CSS https://materializecss.com/ 
    // Bulma https://bulma.io/ 

// Customization
    // css frameworks typically provide a few css files to include as part of your project
    // it's important to be thoughtful when adding to or modifying existing css and this particularly crucial if you're working on a large project

// Problems
    // css frameworks can lead to spaghetti code
        // this occurs when developers don't understand how the css code they are adding to works but continue to add more and more css elements, making the code even more difficult to understand

    // css frameworks often rely on <div> elements and other non-semantic elements, making pages less accessible to certain types of users

    // css frameworks can lead to websites looking too similar to each other

    // as with any tool, using a css framework should be conscious and active choice that you're making
        // a css framework won't always be the best decision


// How to add a CSS framework
    // the most common method is to include a link to a file hosted on a content delivery network (CDN)
        // CDNs make it efficient for many people to access the same file at the same time

    // to link a CDN, you essentially add a stylesheet that has an external URL as its href value.

    // To add Bootstrap to your page, visit Bootstrap's website and scroll down to the jsDelivr section
        // Copy the <link> element that's referenced in that section, and add it to the <head> of your index.html page

        // you don't need to run npm install or anything form your command line. Make sure that you look for the CDN instructions

// 
    

    