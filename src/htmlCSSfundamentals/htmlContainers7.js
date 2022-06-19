// html and css fundamentals
// html containers

// overview: organize content on a web page using container elements

// introduction to html containers
    // containers are specific html elements that wrap around web page content - namely text, images, and links - in order to help you manage the layout and positioning of that content
    // most common:
        // <header> ... </header>
            // helps identify the topics of the content in the web page
            // may be placed over the navigation or it can wrap around the navigation so the navigation sits within the header
        // <nav> ... </nav>
            // holds the primary navigation links for the website
            // can be used multiple times, at both the top and the bottom of a web page
            // when it is at the top of a web page, the navigation container can be placed above, below, or within a header container
        // <footer> ... </footer>
            // contains important contextual info, such as relevant links or legal detainl, about the web page content that is placed above it
        // <main> ... </main>
            // groups together all the main content of a web page
            // can only be one per html web page
            // it shoud NOT contain any content that is repeated across files, such as:
                // sidebars
                // navigation links
                // copywritght information
                // website logos
                // search forms
        // <article> ... </article>
            // groups related content within the web page, generally inside the main container
            // content in article container should make sense if it were read or seen independently
            // should always have a heading (2-6)
            // good types of content to put in article containers:
                // blog post
                // forum post
                // news story
                // comment
        // <section> ... </section>
            // groups together certain content within a web page
            // should always have a heading (3-6)
            // can be used to group related content within article containers
            // avoid using if other containers, like article or navigation containers, are more appropriate
            // div containers can also be better for styling purposes
        // <div> ... </div>
            // most generic
            // no semantic meaning
            // div stands for division
            // often used to position content within a web page
    // They all work the exact same way.
    // They all wrap around text, images, and links.
    // They all provide the same starting shape and placement within the flow of the web page.
    // search engines use containers to compare content across websites
    // containers make it easier to read code

// semantic code and containers
    // semantics is the study of the meaning of words and phrases
    // semantic code is code that has a specific, logical meaning that helps describe the content it is associated with
    // semantic code has semantic significance that makes it easier for search engines, computers, and programmers to read and understand how it operates
    // a semantic container is an html element designed to contain images, text, and links to help with page layout and positioning
    // <div> containers have no semantic importance because they provide no meaningful description of the content they contain
    // when you used properly containers can help improve the search engine optimization, or SEO, of your website, make sure that the primary header on your web page contains the name of your company or the purpose of the web page


// link to locations within a web page
    // <article id="home">Full Home Content Here</article>
    // <article id="about">Full About Content Here</article>
    // <article id="services">Full Services Content Here</article>
    // <article id="contact">Full Contact Content Here</article>

    // <a href="#contact">Contact Link</a>


// backgrounds: colors and images
    // mdn background documentation
        // https://developer.mozilla.org/en-US/docs/Web/CSS/background
    // there are five properties that define the backgrounds for all html elements, including containers:
        // background-color
            // assigns color to the background of an html element
        // background-image
            // an image in the background of an html element repeats by default
            // it displays at its native size then is duplicated, on the right and bottom of the image, to cover the entire background of the html element
        // background-repeat
        // background-attachment
        // background-position