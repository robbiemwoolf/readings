// Rendering with React

// Import and export

// overview: When you work with React, you will be using special ES6 syntax for importing and exporting. ES6 import and export statement work similarly to require() and module.exports, but they have a new and cleaner syntax.


// Named exports

    // You will be using the keyword export to export objects from a file. To create and export a constant, you can use this syntax:

    const website1 = "https://www.thinkful.com";
    export website1;

    // or do it in one line like this:

    export const website = "https://www.thinkful.com";

    // you can have multiple named exports too:

    export const website = "https://www.thinkful.com";
    export const username = "Bob";

// Named imports

    // if you have a file constants.js, with website and username defined and exported, as they are above, you can use the import statement shown below. Note that you use an object with the variable names that are exported in constants.js

    import { website, username } from ".constants";

    // after running the import statement above, you'll have access to the website and username variables

// Default exports

    // When a file has a single export, or when one of the things exported will be used more often than others, you can set a default export instead of a named export.

    // The syntax for this is very similar to export statements, except that you add the keyword default.

    const website = "https://www.thinkful.com/";
    export default website;

    // or equivalently, you can write it in one line

    export default "https://www.thinkful.com/";

    // now you can import with the following statement:

    import website from "./constants";

    // When using defaults, you don't need to give the exported variable the same name as the imported variable. You could also run the following import statement:

    import url from "./constants";

    // MDN documentation for import and export

        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

        // https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export

// Combining named and default exports

    // You can have one default export and any number of named exports. For example, the following file has a default and a named export.

    export default const website = "https://www.thinkful.com/";
    export const username = "Bob";

    // You can use the following import statement to import both website (a default export) and username (a named export).

    import website, { username } from "./constants";