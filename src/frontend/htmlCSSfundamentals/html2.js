// html and css fundamentals
// html basics

// overview: learn to debug errors related to HTML text within prebuilt web pages and build your own custom web page with text and images

// elements and tags
    // this is an element, specifically an <h1> element
        <h1>This is a simple title created within HTML.</h1>
    // an html element is often made up of two tags: an opening tag and a closing tag, or begin or end
        // opening tag <h1>
        // closing tag </h1>

    // html text can be grouped into two primary categories: headings and paragraphs
        // html paragraphs
            // a block content, such as text, that is represented by a <p> element
            // each paragraph will have the same font, size, and color
            // each paragraph has a space, or a hard return, following the text
            // hard returns are defined by the <p> and </p> tags and do not show in the code itself
            // adding extra spaces does not do anything, text will still only have one space shown

        // html headings
            // titles and subtitles that are used throughout a web page to break up, organize, and highlight content
            // tags are like <h1> in which the number in tag suggest where the heading sits in the hierachy
            // primary heading <h1>
            // secondary heading <h2>
            // tertiary heading <h3>
            // can use <h1> through <h6>
            // think of them not only has different sizes but also different importance
                // h1 is often for company name, the website name, or a web page title
                // search engines use HTML tags to understand how to present content
                    // it is best practice to use an <h1> only once per web page to help the <h1> keep its relevance in search engins
                    // <h2> is best used for large, but slightly less important subheadings and it can be used several times within a single web page
                    // <h3> subheading under another subheading
            // there is no <h7> or higher but HTML will not provide any visible errors if it is used

// attributes
    // in html, they are extra bits of information that are tied with certain elements
    // always written inside the opening tag
    // structure
        // attribute="value"

// HTML images
    // they are never embedded
    // they are separate files that must be located on a web server and then referenced on the web page in order to appear on the internet
    // <img> image
        // images do not have closing tags
    // <src> source
        // online location of the image
            // if the image is in the same folder as the HTML page you can just put the filename
        // <width> width
            // always set in pixels
            // if there is no width size set then the image will display at whatever size the image file is naturally saved as
        // <alt> alternate text
            // should be applied to every image on a web page
                // essential for accessibility, it is used by visual web readers which will describe images to users who are blind or visually impaired
                // if the link is broken, it allows the user to know what image should be there
                // also provides search engines more detailed information
                // example:
                // <img src="puppy-love.jpg" width="500" alt="Black lab puppy dog sitting down and looking up.">

// FAQs: Elements and tags
// Question: Should tags be written in capital letters or lowercase letters?
    // Answer: HTML5 doesn't require one case or the other. However, it is considered a best practice to type all code as lowercase.

// Question: Does everything need a tag to show up on an HTML page?
    // Answer: Text is the only content you could technically add without tags. But without tags, there's no way to change the style of the text. Images, links, and containers can't be created without tags.

// Question: What if I forget to add a closing tag? Or what if I don't add the slash to a closing tag?
    // Answer: If you miss these key pieces, bad things will happen to your web page. But the good news is that if you make a mistake like this, it's easy enough to fix it. Often, you'll get a clear cue that something's wrong: visual errors will appear on your page, containers will not display properly, or content will not look like you expect it to (often right before a closing tag is needed). By looking at the code in that area, you'll likely be able to spot the problem and add or fix the proper tag.

// Question: Do all HTML elements except images require both opening and closing tags?
    // Answer: No. There are 16 elements that are self-closing, meaning they only require a single tag. Images are one example of a self-closing element. The syntax of a self-closing tag is as follows: <element attributes />.

