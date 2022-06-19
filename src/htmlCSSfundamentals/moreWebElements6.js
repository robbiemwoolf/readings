// html and css fundamentals
// more web elements

// overview: learn to write comments to accompany html and dss code; use common elements, like lists and dividers, to structure content; style links and images using css

// be discplined about commenting your code
// comments describe what the code is intended to do
// primary reasons for using comments in your code:
    // to describe and explain complicated code and create reminders for yourself and others
    // to deliberately disable sections of code
    // to improve collaboration with other developers working on the code helping them clearly understand what needs to added or fixed, or removed in the code
    // to add titles to the sections of long pages of code to make the pages easier to scan

// html comment syntax
    // <!-- HTML comment -->

// css comment syntax
    // /* css comment */

// html lists
    // <ul><li>unordered list</li></ul>
        // bulleted
    // <ol><li>ordered list</li></ol>
        // numbered

// styling html lists
    // same way as other elements
    // ul {}
    // ol {}
    // li {}

// embedded lists
    // you can nest as many lists as you would like

// changing the position
    //  list-style-position property
        // allows you to move bullets or numbers inside or outside (default) of the list-item container
        // particularly useful if you're assigning a background color to a list and moving the bullets within the container

// page dividers and horizontal rules
    // page dividers allow yu to organize web page content by creating a separation between distinct blocks of content
    // these dividers are called horzontal rules (sometimes called rulers)
        // <hr> are self-closing

    // styling horizontal rules
        // height: This makes the border a certain height, in pixels (px).
        // background-color: This makes the ruler a certain color inside the border.
        // border: This requires three values to change the style of the border: the size in pixels, the color, and the stroke.
        // margin-top: This adds empty space above the line.
        // margin-bottom: This adds empty space below the line

        // can also use background-image: url("image.png");

    // creative horizontal rules
        // https://www.smashingmagazine.com/2008/09/the-hr-contest-results-download-your-fresh-hr-line-now/


// text formatting elements
    // there are ten formatting elements in html that provide a default visual style to htm text
        // <b>: Sets the text in bold.
        // <strong>: Sets the text in bold and is semantically important.
        // <i>: Sets the text in italics.
        // <em>: Sets the text in italics and is semantically important.
        // <mark>: Sets the text as highlighted.
        // <small>: Sets the text as smaller than the rest of the element.
        //<del>: Sets the text to display as crossed out.
        // <ins>: Sets the text to display as inserted by adding an underline to the text.
        // <sub>: Sets the text as subscript , which is smaller and a bit below the other text.
        // <sup>: Sets the text as superscript , which is smaller and a bit above the other text.
    // all change the visual style and formatting but some also add meaning to the content and code
        // this is useful for search engines
        // this is called semantic coding

// line break <br> self-closing

// styling links
    // text link rollovers must be written in this order
        // a:link
        // a:visited
        // a:hover
        // a:active
    // the interactive links of html are referred to as a pseudo-class

// rounded corners and circular images
    // border-radius property
        // setting it to 50% will round all corners resulting in a perfectly circular image (from square) or a an oval (from rectangle)

