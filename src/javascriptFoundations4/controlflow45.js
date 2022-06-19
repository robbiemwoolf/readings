//control flow

//SINGLE-LINE IF STATEMENTS 
const product = {
    priceInCents: 2100,
    name: "Red Beanie",
    size: "L",
    onSale: true,
  };

  //multi-line if statement
  function getPrice(product) {
    let price = product.priceInCents;
    if (product.onSale) {
      price = price * 0.9;
    }
  
    return price;
  }
  // same thing can be written a lot more concisely 
  function getPrice(product) {
    let price = product.priceInCents;
    if (product.onSale) price = price * 0.9;  //when we bring it to a single line we remove the curly braces {}
  
    return price;
  }
  //both return the exact same value, they just look different
  getPrice(product); //> 1890 
  
//THE CONDITIONAL OPERATOR aka THE TERNARY OPERATOR
  //a way to write if/else statements in a shorter more concise way
  //syntax looks like this:
    // (conditional expression) ? (expression if true) : (expression if false)
    function getPrice(product) {
        return product.onSale ? product.priceInCents * 0.9 : product.priceInCents;
      }
      //the question mark ? after product.onSale is asking if that statement is true. If it is we return (product.priceInCents * 0.9) after the colon : we have what we return if the product.OnSale is evaluated as falsy, which in this case is product.priceInCents

//THE SWITCH STATEMENT
    // sometimes the if/else statements are not short like the one above. Take this example:
    function getStateSalesTax(stateAbbreviation) {
        let result;
        if (stateAbbreviation === "CA") {
          result = 0.0725;
        } else if (stateAbbreviation === "CO") {
          result = 0.029;
        } else if (stateAbbreviation === "GA") {
          result = 0.04;
        } else if (stateAbbreviation === "VT") {
          result = 0.06;
        } else {
          result = 0;
        }
      
        return result;
      }
    // we can use switch statements to make it look less clunky, but not necessarily less lines of code
    function getStateSalesTax(stateAbbreviation) {
        let result;
        switch (stateAbbreviation) {
          case "CA":
            result = 0.0725;
            break;
          case "CO":
            result = 0.029;
            break;
          case "GA":
            result = 0.04;
            break;
          case "MD":
          case "VT":
          case "WV":
            result = 0.06;
            break;
          default:
            result = 0;
        }
      
        return result;
      }
    // so if you don't include a break after each case then it will return the result for the next case with a break, also it is not necessary to incluede a break after the last case. default denotes what will happen if you don't receive any of the above cases

