// html and css fundamentals
// deeper with css

// overview: describe and apply the cascading nature of ccs, use classes to dynamically and specifically add styles, and structure content with the box model


// the cascade in cdd
    // css code can be placed in three locations:
        // an external style sheet
        // an internal style sheet
        // inline styles, which sit alonside html code

    // external style sheets
        // contains style rules that are applied to every html page that links to it

        // <head>
        // <link rel="stylesheet" type="text/css" href="style.css" />
        // </head>

        // you can link several style sheets but if you are only using one style.css is where all your css code will go

        // use exernal style sheets uness you have a specific, compelling reason to use internal or inline

    
    // internal style sheets
        // this approach allows you to write css rules within individual web pages
            // but this can make it harder to update and apply your css styles to your web pages

            // <head>
            //     <style>
                        /* Internal CSS Rules go here. */
            //      </style>
            // </head>


    // inline
        // allows you to write css rules on specific html elements
        // it is quite limiting in real-world programming work

        // <body>
        //      <p style="color: red; font-size: 24px;">
        //          Example of an inline style.
        //      </p>
        // </body>


// how does css cascade?
    // css means cascading style sheets
        // the concept of cascading helps determine how rules will be applied based on when they appear in the code
            // addresses the issue that can occur when the same property, but with a different value, is added to a project
        // it gives more importance to the rules that a closer in proximity to the actual content that is being styled
            // if a style rule is written quite close to the html code where it applies, it is considered more important than a rule that is 'farther away' from that html code
        // a css rule at the bottom of an external style has more importance that one at the top of that same style sheet
        // a rule in an internal style sheet has mor importance than any rule in an external sheet
        // and an inline style has more importance that a rule in an internal style sheet
        // if there are conflicts for a given property, the browser will choose the rule with higher specificity
        // less specific -> most specific
        // external(top) -> external(bottom) -> internal -> inline


// the !important option
    // this key word will override the cascade hierarchy 

    // p {
    //   color: red !important;
    //   }

    // although you can do this you should not use it because it implies that there are problems with the application of your style sheets


// css classes
    // classes allow you to apply css properties to any html element and as many times as needed throughout a web page
    // written much like other css rules, but the class is identified by a period . 
        // this period is only in the css file not the html file
            // html file
                // <p class="large-text">This text is large!</p>
            // css file
                // .large-text { //rules }
    // class name should be descriptive and informative

    // .wrapper
        // the wrapper is a common class that is often used by developers in web page layouts
        // wraps around the content within primary containers to center that content within the page
        
// how to apply multiple less specific classes
    //  .warning { color: red; }
    //  .large { font-size: 35px }
    // html
        // <p class="warning large">Internal server error.</p>

// specific classes
    // use a combination selector
    // p.center { text-align: center; }
        // this will only apply to paragraphs even if it is assigned to other html elements


// grouped classes
    // when multiple css classes share the same properties, they can be grouped together
    // this code DOES NOT have grouped classes
        // h1 { color: green }
        // h2 { color: green }
        // .green-text { color: green }
    // grouped classes
        // h1, h2, .green-text { color: green }


// nesting css selectors
    // useful when you want different sections of your website to style common html elements in different ways
    // rather than assigning specific classes, css can be nested to target certain html elements within other html elements

    // All paragraphs within main are black.
    // main p { color: black };

    // All paragraphs within footer are white.
    // footer p { color: white };

    // the styles assigned in the code above will be applied to any paragraphs inside of the main container or footer container, regardless of whether thay are inside additional containers

    // if you want to get more specific, you could use a descendant selector to target only sectors thar are immediately within a parent element

        // main > p { color: white }

        /* <main>
                <p>
                 This text should be white since it is directly within the main container.
                </p>
                <div class="group">
                    <p>
                        This text will not be targeted since it is not directly within the main
                        container.
                    </p>
                </div>
            </main>
        */


// psedo-elements:  ::before and ::after
    // lets you style a specific part of the selected html elements, such as the first letter or line
    // syntax
        // selector::pseudo-element
    
    // ::before and ::after pseudo-elemtns allow you to add content to an html element either just before and just after the content of the element
        // this technique is great for adding certain types of content, such as creating smart quotes around blockquotes
        // more broadly, these style rules can be a good way to handle reapted visual content that surrounds an element

        /* div::before {
                content: "before";
                        }

            div::after {
                content: "after";
                        }
        */

        /* <div>
                before
                <!-- Rest of stuff inside the div -->
                after
            </div>
        */

        // keep in mind this added content is still INSIDE the specified element
            // they add content before or after the content of the element, not the element itself


// the box model
    // every html element is considered to be a box
        // Content: This is the area in each element where the text, links, and images appear.
        // Border: This is like a "frame" around the element. Every element can have a visible border, and borders can be styled in various ways.
        // Padding: This is the space between the border and the content. It takes on the background color assigned to the element.
        // Margin: This is the space outside of the border. It is transparent, displaying any colors or images behind it.

// a note on borders
    // borders require three values:
        // width: the border width is typically set in pixels (px)
        // style: from a design perspective, styled borders are pretty out of date
        // color: border can be assigned using any color technique you prefer
            // html color name: red
            // hex: #ff0000
            // rgb: rgb(255,0,0)
            // hsl: hsl(0, 100%, 50%)
        // when it comes to borders, the value order is unimportant
            // any-element { border: 1px solid #000 }

    // used properly, borders can look fresh and modern. But if used improperly, you'll build a website that looks tacky, unattractive, and outdated

    // box-sizing
        // allows you to include both the padding and the border within the total width and height of an element
        // two different ways to set box-sizing(but the second is what you should use):
            // box-sizing: content-box:
                // this is the older, default setting
            // box-sizing: border-box;
                // this is the newer, css3 setting
        // using box-sizing: border-box means when you set the width: 400px the actual width will be 400px
        // more box-sizing articles and documentation:
            // https://css-tricks.com/box-sizing/
            // https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing


// assigning margins and padding
    // when a single value it designated, the code will apply it to all four sides 
        // margin: 25px; //applies on all four sides
    // you can also use specific values for each side
        // margin-top: 25px;
        // margin-right: 25px;
        // margin-bottom: 25px;
        // margin-left: 25px;
    // if you designate two values then it will be each side pair
        // the first-value is the top and bottom
        // the second-value is the left and right
        // margin: 25px 15px; // 25 top/bottom, 15 left/right
    // if four values are specified then they will apply in this order (top(25), right(15), bottom(20), left(12)):
        // margin: 25px 15px 20px 12px


// browser defaults versus normalize.css
    // with this small css file, you can guarantee cross-browser consistency for default styles