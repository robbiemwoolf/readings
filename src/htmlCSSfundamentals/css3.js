// html and css fundamentals
// css basics

// overview: learn to style html text using CSS to change the font, size, and color of text and degub errors related to CSS styles within a pre-built web page

// terms
    // rule or ruleset: this is the entire block of css code assigned to style an HTML element
    // selector: this is the name of the HTML element that will be styled
    // property: this is a set or family of attributes, or options, that you can change
    // value: this is the specific change you want to make, such as pixel size, color, etc
    // declaration: this consists of both the property and the value assigned to the selector

// intro to CSS styles
    // css code is usually written in distinct files, with filenames like style.css
        // <link href="style.css" rel="stylesheet" type="text/css" />
            // this references the css file, without this the html file will not have access to the css file
    
    // css rulesets
        // these rules define what changes are applied to the html file
        // this  rule has several components: a selector, a property, a declaration, and a value
            //   p {font-size:16px;}

// selectors and declarations
    // a selector defines what element in the code should be affected by the declaration block that follows the selector
        // p selectlor refers to every p element on the page and it will be styled by the info provided in the declaration block
    // the declaration block begins and ends with curly brackets {}
        // each line inside of the {} represents a separate declaration
        //  p {
        //    color: blue;
        //    font-size: 16px;
        //  }
            // there are two declarations
                // the first sets the text color to blue
                // the font size is 16 pixels

        // properties and values
            // each declaration is made up of a property and value
                // the property is the general category or type of stylistic change you'd like to make
                // the value then specifies exactly what style you'd like to apply
            // there are hundreds of css properties and values
                // common css properties reference https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference 
            // syntax
                // property: value;

        // intro to web colors
            // only 140 colors that can be called by name
            // hex color codes, often called hex values allow for k16,777,216 possible color combos
            // color names and hex color codes
                // https://htmlcolorcodes.com/color-names/
            // useful tool
                // https://coolors.co/
                    // generates a color scheme for you to use
            // #000000 black
            // #ffffff white
        
        // more on fonts: Fallbacks
            // font-family: Arial, Tahoma, serif;
                // this is a font stacks
                // the font stack tells the code that if the first font, in this case Arial, doesn't load properly, it should try the next font in the list.
                // the code will try each font until it finds on that works properly, these are called font callbacks
                // the last font choice should be a broader type of font style
                    // serif: often used for headings. The letters in these fonts have little tapered ends or tails, which add a stylistic accent to text and make letters and characters more attractive at larger sizes
                    // sans-serif: often used for paragraphs text on websites. They have minimal flaring and tapering at the ends of letters, making smaller text easier to read.
                    // monospace: often used for code samples, and all of the letters have the same width
                    // cursive: has a playful, handwritten style, which can feel more emphatic than italics
                    // fantasy: has a whimsical, decorative style. But use this as a fallback with care; it's more limted than other font groups
        
        // more styles for text
            // font-style: This is how you can change the stylistic formatting of the font, such as adding italics (italic or oblique).
            
            // font-weight: This is how you set the thinness or thickness of a font. There are usually values from 100 to 900 available.
            
            // letter-spacing: This is how you determine the proximity of individual letters by increasing or decreasing the space between them, measured in pixels. For instance, a value of 1px is fairly normal, or a value of -3px will pull the letters closer together.
            
            // line-height: This is how you increase or decrease the space between lines of text. For instance, you could apply 20px of space between lines of text.
            
            // text-align: This property allows you to realign text to be center, left, right, or justified.
            
            // text-decoration: This allows you to add additional formatting, like underline, overline (text with a horizontal line above it, often used in math notation), or line-through (also known as strikethrough).
            
            // text-transform: This allows you to change the case of the letters, such as uppercase and lowercase.