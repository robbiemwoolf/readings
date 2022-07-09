// destructing and rest

const product = {
    title: "The Golden Compass",
    priceInCents: 799,
    author: {
      firstName: "Philip",
      surname: "Pullman",
    },
  };

  function printAuthorAndTitle(product) {
    return `${product.title} by ${product.author.firstName} ${product.author.surname}`;
  }
    //this works fine but the return statement is long and repetitive

  function printAuthorAndTitle(product) {
    const author = product.author;
    const title = product.title;
  
    return `${title} by ${author.firstName} ${author.surname}`;
  }
    //this is a little cleaner but we are still repeating product, so let's try destructuring

//destructing
  // when we destructure an object or array, you're unpacking the properties or values and assigning them into distinct variables

  function printAuthorAndTitle(product) {
    const { author, title } = product;
    return `${title} by ${author.firstName} ${author.surname}`;
  }
    //pn line 29 we assigned two new variables which are the keys in the product object, if you list a key that is not found in the object, it will return undefined
//destructing syntax looks like const { } = object;

//we can also destructure multiple levels into an object
    function printAuthorAndTitle(product) {
        const {
        author: { firstName, surname },
        title,
        } = product;
        return `${title} by ${firstName} ${surname}`;
    }
    //here the return statement is much cleaner

    const author = {
        name: {
          firstName: "Philip",
          surname: "Pullman",
        },
        birthday: "1946-10-19",
      };

      const { name: { firstName, surname}, birthday} = author;


// destructuring arrays
      //objects are accessed by their keys, but arrays are accessed by their index

      const genres = [
        "Fantasy",
        "Fiction",
        "Nonfiction",
        "Science Fiction",
        "Young Adult",
      ];
    // you can destructure it like this:
    const [first, second] = genres;
    console.log(first); //> 'Fantasy'
    console.log(second); //> 'Fiction'
    // two new variables are created: first and second. Those variable names are set to the elements at index 0 and index 1. The rest of the elements are ignored.
    const authors = [
        "Ursula K. Le Guin",
        "Brandon Sanderson",
        "Terry Pratchett",
        "Neil Gaiman",
        "J. R. R. Tolkien",
      ];

 //rest operator

    const [firsta, seconda, ...otherAuthors] = authors;
    console.log(firsta); //> "Ursula K. Le Guin"
    console.log(seconda); //> "Brandon Sanderson"
    console.log(otherAuthors); //> ["Terry Pratchett", "Neil Gaiman", "J.R.R. Tolkien"]
      //as you can see the variables could be named anything
    // there are two variables: firsta and seconda. those are followed by the syntax that makes up the rest operator: the three periods ... and a variable name, which in this case is otherAuthors. The variable that follows ... will contain all of the remaining array elements that weren't destructed. This can be useful for splitting apart an array.

// DESTRUCTING PARAMETERS
    // you can also use destructuring in functions in order to destructure the parameters
    function printAuthorAndTitle({ author, title }) {
        return `${title} by ${author.firstName} ${author.surname}`;
    }
    // this can be useful for at least two reasons
        // you know that the expected input is an object
        // the function is concise and easy to read
    // the downside to this approach is if you need to access the entire inputted object, you have no way to do so.

    
    