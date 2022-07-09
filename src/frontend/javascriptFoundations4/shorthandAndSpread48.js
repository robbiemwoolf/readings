// object shorthand and spread

//object shorthand syntax means that you can create objects using values that you've stored in variables
const title = "Infernal Devices";
const author = "K.W. Jeter";
const book = { title, author };

console.log(book); //> { title: "Infernal Devices", author: "K.W. Jeter" }
// JavaScript takes the name of the variable and sets that to be the key. It then sets the value to be whatever is stored in that variable.

const product = { book, priceInCents: 1950 };
// {
//     book: {
//       title: "Infernal Devices",
//       author: "K.W. Jeter",
//     },
//     priceInCents: 1950,
//   };

// SPREAD OPERATOR
    // it allows you to easily combine arrays and objects without a lot of complicated 
    // let's combine these two arrays
    const ownedBooks = ["Infernal Devices", "Foundation"];
    const wishlist = ["Good Omens", "Guards! Guards!"];
    // we could loop through one array and push each item into the other, or we could use the concat() method, but there is an easier way
    const allBooks = [...ownedBooks, ...wishlist];
    //> [ "Infernal Devices", "Foundation", "Good Omens", "Guards! Guards!" ]
    // the three periods ... used with an existing array on the right side of the = sign will expand the entries inside of the array
    // this can also be done with objects
    const salesTax = { state: "Washington", tax: 0.065 };
    const sale = { ...product, ...salesTax };
    /*
    {
        book: {
        title: "Infernal Devices",
        author: "K.W. Jeter",
        },
        priceInCents: 1950,
        state: "Washington",
        tax: 0.065
    };
    */
   // in the example above, the product object contains the book key and the priceInCents key. The salesTax object contains the state and tax keys. Those keys are all placed into a new object in the variable sale. Note how the book object wasn't expanded; the spread operator expands only one level deep.

// you can overwrite keys in a object where you're using shorthand by using the key once again
const sale = {
    ...product,
    ...salesTax,
    priceInCents: product.priceInCents * (1 + salesTax.tax),
  };
  /*
    {
      book: {
        title: "Infernal Devices",
        author: "K.W. Jeter",
      },
      priceInCents: 2076.75,
      state: "Washington",
      tax: 0.065
    };
  */
// in the example above, the product and salesTax values are expanded with spread operator. But this time, the priceInCents key is added to overwrite the priceInCents key that was stored in the product value

