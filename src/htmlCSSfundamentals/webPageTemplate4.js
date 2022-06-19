// html and css fundamentals
// web page template

// overview: explain the core HTML elements that are part of every HTML web page and describe the organizatin of a multipage website

// a basic template for a webpage includes:
    // index.html
    // style.css
    // script.js

// <!DOCTYPE html> // declares document as an HTML web page
// <html> // holds all the html code
//     <head> // contains all the important info web browsers and search engines need regarding a web page
//         <meta charset="utf-8"> // holds important info related to the data with the web page, the character set tells browsers how to process the characters and code within the file
//         <meta name="viewport" content=<"width=device-width"> // sets the width of the web page
//         <title>repl.it</title> // what is displayed on the webpage tab, also used when bookmarked on a web browser
//         <link href="style.css" rel="stylesheet" type="text/css" /> // used to connect and reference resources on the internet, this specifically links the css file; rel stands for relationship; type specifies the media type of the linked file
//         </head>
//         <body> // contains all the html code for the text, images, links, and containers used for the web page structure
//             <script src="script.js"></script> // links to the javascript file, best practice to place here to allow the web page to load first and faster
//         </body>
// </html>


// the normalize.css file
    // a css library that sets all html elements to display consistently across all supported web browsers
    // small file that styles and formats headings, paragraphs, blockquotes, and other common HTML elements so that they appear identical ( or very similar ) on Chrome, Firefox, Safari, etc
    // best to link to the file from a content delivery network, or CDN
    // should load first before applying your own style rules using your own style.css file
        // if you put it after it may overwrite your styles
    // <link
    //     href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
    //     rel="stylesheet"
    //     type="text/css"
    //   />
    // normalize.css and normalize.min.css
        // functionally the same but the .min version has all spaces and visual formatting removed


// every website's home page will be named index.html
// index.html file needs to be written in lowercase letters. Web file names tend to only use lowercase letters to prevent simple mistakes


